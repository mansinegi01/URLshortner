
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const fetchurls = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/allURLs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"

          
        });
        const data = await res.json();
        console.log(data);
        setUrls(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchurls();
  }, []);


  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <table className="table table-striped text-white">
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Visited History</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, index) => (
            <tr key={url._id}>
              <td>{index + 1}</td>
              <td>{url.redirectURL}</td> {/* backend's name */}
              <td>
                {/* match casing */}
                <a
                  href={`http://localhost:5000/${url.shortID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`http://localhost:5000/${url.shortID}`}
                </a>

              </td>
              <td>{url.visitedHistory?.length || 0}</td>
            </tr>
          ))}
        </tbody>

      </table>

      <p className="mt-4 text-white text-center">
        <Link to="/add" className="underline ml-2">
          Add Route
        </Link>
      </p>
    </div>
  );
}

export default Home;
