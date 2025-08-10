import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">S.NO.</th>
          <th scope="col">Original URL</th>
          <th scope="col">Short URL</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
       
      </tbody>
    </table>
  );
}

export default Home;
