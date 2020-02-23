import React from "react";
import Nav from "./Nav";

//css
import "../assets/css/projects.scss";
import "../assets/css/projectPara.scss";

//images
import responsive from "../assets/images/responsive1.png";
import yelp from "../assets/images/yelp.png";
import airbnb from "../assets/images/air2.png";
import vr from "../assets/images/vr.png";
import subReddit from "../assets/images/subreddit.png";
import welldone from "../assets/images/welldone.png";

const Projects = () => {
  return (
    <>
      <div>
        <Nav />
      </div>

      <div className="project-wrap">
        <div className="lambdatitle">
          <h1>Projects</h1>
        </div>

        <section class="container">
         
            <div className="title-box">
              <h1>Well Done</h1>
              <p>
                Stakeholder is a NGO that develops sensors for well pumps in
                remote locations.
              </p>
              </div>
              <div class="image-well"></div>
              <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>React / Redux</li>
                <li>React-map</li>
                <li>Node.js</li>
                <li>Heroku</li>
                <li>PostgreSQL</li>
              </ul>
              <ul class="link">
                <a
                  href="https://github.com/Lambda-School-Labs/well-done-fe"
                  target="_blank"
                  class="button"
                >
                  Frontend Github Code
                </a>
                <br></br>
                <a
                  href="https://github.com/Lambda-School-Labs/well-done-be"
                  target="_blank"
                  class="button"
                >
                  Backend Github Code
                </a>
              </ul>
           
         
        </section>

        <section class="container">
          <div className="content">
            <div className="content-box">
              <h1>SubReddit</h1>

              <p>
                Our task was to design and implement a Node.js
                <strong>BACKEND</strong> server with a database to enable users
                to perform
                <strong> CRUD</strong> operations: Register, Login, .post, .get,
                and .delete. I also assisted the React Frontend developer set up
                the Redux architecture.
              </p>
              <div className="image-subreddit"></div>

              {/* listStyle: "none", no bullet points */}
              <ul style={{ listStyle: "none" }}>
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
        </section>

        <section class="container">
          <div class="content">
            <div class="content-box">
              <h1>Yelp</h1>

              <p>
                My task was to design and implement the Frontend architecture
                using
                <strong>React</strong> and <strong>Redux</strong>. I
                Collaborated with backend and Data Science teams. Functionality
                includes: Register, Login, .post, .get, .put, .delete,
                submission forms, and a responsive design.
              </p>
              <div className="image-yelp"></div>

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
          </div>
        </section>

        <section class="container">
          <div class="content">
            <div class="content-box">
              <h1>Air Bnb</h1>

              <p>
                Frontend architecture implementation using{" "}
                <strong>React</strong>. To perform <strong>CRUD</strong>
                operations on the database. Tasks included: Register, Login,
                .post, .get, forms, responsive design.
              </p>
              <div class="image-air"></div>

              <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>Javascript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>

              <ul class="link">
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
        </section>

        <section class="container">
          <div class="content">
            <div class="content-box">
              <h1>VR Funding</h1>

              <p>
                Design a fully responsive Landing page for desktop and mobile
                using LESS for preprocessing.
              </p>
              <div class="image-vr"></div>

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
        </section>

        <section class="container">
          <div class="content">
            <div class="content-box">
              <h1>Responsive Design</h1>
              <p>Design a fully responsive static site.</p>

              <div class="image-responsive"></div>

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
        </section>
      </div>
    </>
  );
};
export default Projects;
