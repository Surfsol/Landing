import React from "react";
import Nav from "./Nav";

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

const Projects = () => {
  return (
    <>
      <div className="projectsNav">
        <Nav />
      </div>

      <div className="project-wrap">
        <div className="lambdatitle">
          <h1>Projects</h1>
        </div>

        <div className="featuredprojects">
          <div className="fproject">
            <NavLink className="projectHover" to={`/project/sauti`}>
              <SautiImage />
            </NavLink>

            {/* </div>
            <div className="fproject"> */}
            <NavLink className="projectHover" to={`/project/welldone`}>
              <WellImage />
            </NavLink>
          
      

        {/* <div className="body-content-first">
          <div className="image-body">
            <img src={subReddit} />
          </div>
          <div className="projectcontent">
            <div className="content-box">
              <h1>SubReddit</h1>

              <p>
                Our task was to design and implement a Node.js
                <strong>BACKEND</strong> server with a database to enable users
                to perform
                <strong> CRUD</strong> operations: Register, Login, .post, .get,
                and .delete. I also assisted the React Frontend developer set up
                the Redux architecture.
              </p> */}

        {/* listStyle: "none", no bullet points */}
        {/* <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>Node.js / Express</li>
                <li>BcryptJS</li>
                <li>jsonwebtoken</li>
                <li>PostgreSql / Sqlite3</li>
                <li>Heroku</li>
              </ul>
              <ul class="link">
                <a
                  href="https://github.com/BuildWeek-PostHere-Subreddit"
                  target="_blank"
                  class="button"
                >
                  Github Code
                </a>
              </ul>
            </div>
          </div>
        </div> */}
      
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

        {/* <section className="body-content-2">
          <div className="projectcontent">
            <div className="content-box">
              <h1>Yelp</h1>

              <p>
                My task was to design and implement the Frontend architecture
                using
                <strong>React</strong> and <strong>Redux</strong>. I
                Collaborated with backend and Data Science teams. Functionality
                includes: Register, Login, .post, .get, .put, .delete,
                submission forms, and a responsive design.
              </p>

              <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>React</li>
                <li>Redux</li>
                <li>PREPROCESSING</li>
                <li>Forms</li>
                <li>ZEIT</li>
              </ul>
              <ul class="link">
                <a
                  href="https://github.com/BW-YELP-FEELERS"
                  target="_blank"
                  class="button"
                >
                  Github Code
                </a>
              </ul>
            </div>
          </div> */}

        {/* <div className="image-body">
            <img src={yelp} />
          </div>
        </section> */}
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

        {/* <section className="body-content">
          <div className="image-body">
            <img src={airbnb} />
          </div>

          <div className="projectcontent">
            <div className="content-box">
              <h1>Air Bnb</h1>

              <p>
                Frontend architecture implementation using{" "}
                <strong>React</strong>. To perform <strong>CRUD</strong>
                operations on the database. Tasks included: Register, Login,
                .post, .get, forms, responsive design.
              </p>

              <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>Javascript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>

              <ul class="link">
                <a
                  href="https://frontend-git-master.surfsol.now.sh/"
                  target="_blank"
                  class="button"
                >
                  Deployed Site
                </a>

                <a
                  href="https://github.com/AirBNBOptimalPrice"
                  target="_blank"
                  class="button"
                >
                  Github Code
                </a>
              </ul>
            </div>
          </div>
        </section> */}

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
              {/* <a
                  href="https://frontend-git-master.surfsol.now.sh/"
                  target="_blank"
                  class="button"
                >
                 <h2> Deployed Site</h2>
                </a> */}
            </div>
          </div>
        </div>

        {/* <section className="body-content-2">
          <div className="projectcontent">
            <div className="content-box">
              <h1>VR Funding</h1>

              <p>
                Design a fully responsive Landing page for desktop and mobile
                using LESS for preprocessing.
              </p>

              <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>HTML</li>
                <li>CSS</li>
                <li>LESS</li>
              </ul>
              <ul class="link">
                <a
                  href="https://github.com/Build-Week-VR-Funding-Platform"
                  target="_blank"
                  class="button"
                >
                  Github Code
                </a>
              </ul>
            </div>
          </div>

          <div className="image-body">
            <img src={vr} />
          </div>
        </section>

        <section className="body-content-last">
          <div className="image-body">
            <img src={responsive} />
          </div>

          <div className="projectcontent">
            <div className="content-box">
              <h1>Responsive Design</h1>
              <p>Design a fully responsive static site.</p>

              <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>HTML</li>
                <li>CSS</li>
                <li>LESS</li>
              </ul>
              <ul class="link">
                <a
                  href="https://github.com/Surfsol/responsive-web-design-I/tree/russell-terry"
                  target="_blank"
                  class="button"
                >
                  Github Code
                </a>
              </ul>
            </div>
          </div>
        </section> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
