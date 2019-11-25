import React from "react";

//css
import "../assets/css/projects.sass";

//images
import responsive from "../assets/images/responsive1.png";
import yelp from "../assets/images/yelp.png";
import airbnb from "../assets/images/air.png";
import vr from "../assets/images/vr.png";
import subReddit from "../assets/images/subreddit.png";

const Projects = () => {
  return (
    <>
      <section className="body-content">
        <div className="image-body">
          <img src={subReddit} />
        </div>
        <div className="content">
          <div className="content-box">
            <h1>SubReddit</h1>
            <h3>Task</h3>
            <p>
              Design and implement a <strong>BACKEND</strong> with <strong>Nodejs</strong> and
              <strong>PostgreSql</strong> for production, so users can register,
              login, and perform <strong>CRUD</strong> operations on the
              database.
              Register, Login, .post, .get, .delete, forms, responsive design</p>
            <h3>Tecnologies applied:</h3>
            <ul style={{ listStyle: "none" }}>
              <li>Node.js</li>
              <li>Express</li>
              <li>Knex</li>
              <li>BcryptJS</li>
              <li>jsonwebtoken</li>
              <li>PostgreSql</li>
            </ul>
            <ul class="link">
              <a
                href="https://github.com/BuildWeek-PostHere-Subreddit"
                class="button"
              >
                Get the Code
              </a>
            </ul>
          </div>
        </div>
      </section>

      <section class="body-content">
        <div class="content">
          <div class="content-box">
            <h1>Yelp</h1>
            <h3>Task</h3>
            <p>
              Design and implement the Frontend architecture using{" "}
              <strong>React</strong> and <strong>Redux</strong>. Collaborated
              with backend and Data Science teams.
            Register, Login, .post, .get, .put, .delete, forms, responsive design.</p>
            <h3>Tecnologies applied:</h3>
            <ul style={{ listStyle: "none" }}>
              <li>React</li>
              <li>Redux</li>
              <li>PREPROCESSING</li>
              <li>Forms</li>
            </ul>
            <ul class="link">
              <a href="https://github.com/BW-YELP-FEELERS" class="button">
                Get the Code
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
            <h3>Task</h3>
            <p>
              Frontend architecture implementation using <strong>React</strong>.
              To perform <strong>CRUD</strong>
              operations on the database. 
              Register, Login, .post, .get, forms, responsive design.
            </p>
            <h3>Tecnologies applied:</h3>
            <ul style={{ listStyle: "none" }}>
              <li>Javascript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>


            <ul class="link">
              <a href="https://github.com/AirBNBOptimalPrice" class="button">
                Get the Code
              </a>
            </ul>
          </div>
        </div>
      </section>

      <section class="body-content">
        <div class="content">
          <div class="content-box">
            <h1>VR Funding</h1>
            <h3>Task</h3>
            <p>
              Design a fully responsive Landing page for desktop and mobile
              using preprocessing.
            </p>
            <h3>Tecnologies applied:</h3>
            <ul style={{ listStyle: "none" }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>PREPROCESSING LESS</li>
            </ul>
            <ul class="link">
              <a
                href="https://github.com/Build-Week-VR-Funding-Platform"
                class="button"
              >
                Get the Code
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
            <p>
              Checkout this responsive site that adjust for tablet and mobile
              devices.
            </p>
            <h3>Tecnologies applied:</h3>
            <ul style={{ listStyle: "none" }}>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <ul class="link">
              <a
                href="https://github.com/Surfsol/responsive-web-design-I/tree/russell-terry"
                class="button"
              >
                Get the Code
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
