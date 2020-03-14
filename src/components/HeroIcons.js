import React from "react";

import videoDolphin from "../assets/images/Dolphin.mp4";

 import "../assets/css/heroIcons.scss";



const HeroIcons = () => {
  return (
    <>
      <header class="nav ncontainer">
        <div class="nav">
          <video src={videoDolphin} autoPlay="true" loop="true"></video>
        </div>
        <div class="nav-overlay"></div>
        <div class="nav-content">
          <div className="NavName">
            <h1>Click to Discover Projects by Technology:</h1>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeroIcons;
