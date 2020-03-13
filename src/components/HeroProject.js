import React from "react";
import Icons from "./Icons";
import Techs from "./Techs";
import ModalContact from "./ContactModal";

import videoDolphin from "../assets/images/Dolphin.mp4";

import "../assets/css/HeroProject.scss";

import git from "../assets/icons/github.png";

const HeroProject = () => {
  return (
    <>
      <header class="nav ncontainer">
        <div class="nav">
          <video src={videoDolphin} autoPlay="true" loop="true"></video>
        </div>
        <div class="nav-overlay"></div>
        <div class="nav-content">
          <div className="NavName">
            <h1>Projects</h1>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeroProject;
