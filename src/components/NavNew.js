import React from "react";
import Icons from "./Icons";
import Techs from "./Techs";
import ModalContact from "./ContactModal";

import videoDolphin from "../assets/images/Dolphin.mp4";

import "../assets/css/navnew.scss";

import git from "../assets/icons/github.png";

const NavBar = () => {
  return (
    <>
      <header class="newnav newcontainer">
        <div class="newnav-content">
          <div className="NavName">
            <h1>Russell Terry</h1>
          </div>
          <div className="menu-items">
            <a href="/" class="nav-btn">
              Home
            </a>
            <a href="/projects" class="nav-btn">
              Projects
            </a>
            <a href="/skills" class="nav-btn">
              Skills
            </a>
            <a class="nav-btn">
              <ModalContact />
            </a>
          </div>
          <div class="git">
            <a href="https://github.com/Surfsol" target="_blank">
              <img src={git} />
              <p>Github/surfsol</p>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;
