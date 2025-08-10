import React, { useState } from "react";
import {Link} from "react-router-dom"
function AddURL() {
  const [url, setUrl] = useState("");
  const [shortURL, setShortURL] = useState(""); 

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      console.error("URL is empty");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (res.ok) {
        setShortURL(`http://localhost:5000/${data.shortID}`);

      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Add URL</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="vanity-url"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your vanity URL
            </label>
            <div className="flex">
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded-l-md border border-gray-600">
                https://example.com/users/
              </span>
              <input
                type="text"
                id="vanity-url"
                className="flex-1 min-w-0 px-3 py-2 bg-gray-700 border border-l-0 border-gray-600 rounded-r-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter URL"
                onChange={handleChange}
                value={url}
                name="url"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Add URL
          </button>
        </form>

        {shortURL && (
          <div className="mt-4">
            <p className="text-white">Short URL:</p>
            <a
              href={shortURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              {shortURL}
            </a>
          </div>
        )}

        <p className="mt-4 text-white text-center">
        <Link to="/" className="underline ml-2">
          Home Page
        </Link>
      </p>
      </div>
    </div>
  );
}

export default AddURL;
