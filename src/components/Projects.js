import React from "react";
import Nav from "./Nav";

import ContactModal from './ContactModal'

//css
import "../assets/css/projects.scss";

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
      <div className="modal-fix">
      <ContactModal/>
    </div>

      <div className="project-wrap">
        <div className="lambdatitle">
          <h1>Lambda Team Projects</h1>
        </div>

        <section class="body-content-2">
          <div class="content">
            <div class="content-box">
              <h1>Well Done</h1>

              <p>
                Our team made additions to the Frontend and Backend
                architecture. Stakeholder is a NGO that develops sensors for
                remote well pumps. We converted frontend to Redux, added modals
                for crud operations, added an Admin and Organizational
                dashboard, user permissions, etc.
              </p>

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
            </div>
          </div>
          <div class="image-body">
            <img src={welldone} />
          </div>
        </section>

        <section className="body-content">
          <div className="image-body">
            <img src={subReddit} />
          </div>
          <div className="content">
            <div className="content-box">
              <h1>SubReddit</h1>

              <p>
                Design and implement a <strong>BACKEND</strong> server with a
                database so users can perform
                <strong> CRUD</strong> operations: Register, Login, .post, .get,
                .delete, forms, responsive design
              </p>

              {/* listStyle: "none", no bullet points */}
              <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>Node.js</li>
                <li>Express</li>
                <li>Knex</li>
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

        <section class="body-content-2">
          <div class="content">
            <div class="content-box">
              <h1>Yelp</h1>

              <p>
                Design and implement the Frontend architecture using{" "}
                <strong>React</strong> and <strong>Redux</strong>. Collaborated
                with backend and Data Science teams. Register, Login, .post,
                .get, .put, .delete, forms, responsive design.
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
          </div>

          <div class="image-body">
            <img src={yelp} />
          </div>
        </section>

        <section class="body-content">
          <div class="image-body">
            <img src={airbnb} />
          </div>

          <div class="content">
            <div class="content-box">
              <h1>Air Bnb</h1>

              <p>
                Frontend architecture implementation using{" "}
                <strong>React</strong>. To perform <strong>CRUD</strong>
                operations on the database. Register, Login, .post, .get, forms,
                responsive design.
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

        <section class="body-content-2">
          <div class="content">
            <div class="content-box">
              <h1>VR Funding</h1>

              <p>
                Design a fully responsive Landing page for desktop and mobile
                using preprocessing.
              </p>

              <ul style={{ listStyle: "none" }}>
                <h4>Tecnologies applied:</h4>
                <li>HTML</li>
                <li>CSS</li>
                <li>PREPROCESSING LESS</li>
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

          <div class="image-body">
            <img src={vr} />
          </div>
        </section>

        <section class="body-content">
          <div class="image-body">
            <img src={responsive} />
          </div>

          <div class="content">
            <div class="content-box">
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
        </section>
      </div>
    </>
  );
};
export default Projects;
