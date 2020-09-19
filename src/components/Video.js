import React from "react";

import ContactModal from "./ContactModal";

import videoDolphin from "../assets/images/dolp2.mp4";

import sea from '../assets/images/sea.jpg'

import "../assets/css/video.scss";

import git from "../assets/icons/github.png";

import { Link } from "react-router-dom";

const Video = () => {
  return (
    <>
      <header class="header container">
        <div class="fullscreen">
          {/* must be muted to play when loaded on chrome */}
          <video
            src={videoDolphin}
            autoPlay="true"
            loop="true"
            startTime="300"
            muted="true"
          ></video>
          <img class='sea' src={sea} alt="sea" />
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Russell Terry</h1>

          <a href="/projects" className="btn">
          <h2> Projects</h2>
          </a>
          <a href="/skills" className="btn">
          <h2> Skills</h2>
          </a>
          <a className="btn">
         <ContactModal />
          </a>
          <div class="git">
            <a href="https://github.com/Surfsol" target="_blank">
              <i class="fab fa-github"></i>
              <p>Github/surfsol</p>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Video;
