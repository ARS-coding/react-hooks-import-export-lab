import React from "react";
// import username from "../data/user.js";
// import city from "../data/user.js";
import * as userData from "../data/user.js"

function Home() {
  return (
    <div id="home">
      <h1>
        {userData.username} is a Web Developer from {userData.city}
      </h1>
    </div>
  );
}

export default Home
