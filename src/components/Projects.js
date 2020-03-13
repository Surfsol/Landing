import React from "react";
import Nav from "./Nav";

import NavNew from './NavNew'

import { NavLink } from "react-router-dom";

import WellImage from "./WellImage";
import "../assets/css/wellImage.scss";

//css
import "../assets/css/projects.scss";

//images
import responsive from "../assets/images/responsive1.png";
import yelp from "../assets/images/yelp.png";
import airbnb from "../assets/images/air2.png";
import vr from "../assets/images/vr.png";
import subReddit from "../assets/images/subreddit.png";
import SautiImage from "./SautiImage";
import HeroProject from './HeroProject'

const Projects = () => {
  return (
    <>
      <div className="projectsNav">
        <NavNew />
      </div>
      <div><HeroProject/></div>

      <div className="project-wrap">

        <div className="featuredprojects">
          <div className="fproject">
            <NavLink className="projectHover" to={`/project/sauti`}>
              <SautiImage />
            </NavLink>

            <NavLink className="projectHover" to={`/project/welldone`}>
              <WellImage />
            </NavLink>

            <div className="pgcontainer">
              <div class="pgbg">
                <div className="pgwellImageTitle">
                  <h1>SubReddit</h1>
                  <h2>
                    React, Redux, BcryptJS, jsonwebtoken, Node.js, Heroku,
                    PostgreSQL
                  </h2>
                  <a
                    href="https://github.com/BuildWeek-PostHere-Subreddit"
                    target="_blank"
                    class="button"
                  >
                    <h2>Github</h2>
                  </a>
                </div>
                <img src={subReddit} alt="sub-Reddit" />
              </div>
            </div>

            <div className="pgcontainer">
              <div class="pgbg">
                <div className="pgwellImageTitle">
                  <h1>Yelp</h1>
                  <h2>React, Redux, SAS, Forms, Zeit</h2>
                  <a
                    href="https://github.com/BW-YELP-FEELERS"
                    target="_blank"
                    class="button"
                  >
                    <h2>Github</h2>
                  </a>
                </div>
                <img src={yelp} alt="yelp" />
              </div>
            </div>

            <div className="pgcontainer">
              <div class="pgbg">
                <div className="pgwellImageTitle">
                  <h1>Air Bnb Price Optimizer</h1>
                  <h2>React,Context-Ui, LESS, Forms</h2>
                  <a
                    href="https://github.com/AirBNBOptimalPrice"
                    target="_blank"
                    class="button"
                  >
                    <h2>Github</h2>
                  </a>
                </div>
                <img src={airbnb} alt="airbnb" />

                <div class="pgoverlay">
                  <a
                    href="https://frontend-git-master.surfsol.now.sh/"
                    target="_blank"
                    class="button"
                  >
                    <h2> Deployed Site</h2>
                  </a>
                </div>
              </div>
            </div>

            <div className="pgcontainer">
              <div class="pgbg">
                <div className="pgwellImageTitle">
                  <h1>VR Funding</h1>
                  <h2>Fully Responsive, LESS, HTML</h2>
                  <a
                    href="https://github.com/Build-Week-VR-Funding-Platform"
                    target="_blank"
                    class="button"
                  >
                    <h2>Github</h2>
                  </a>
                </div>
                <img src={vr} alt="airbnb" />

                <div class="pgpg">
                
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
