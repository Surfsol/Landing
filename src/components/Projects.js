import React from "react";

//css
import "../assets/css/projects.scss";

//images
import responsive from "../assets/images/responsive1.png";
import yelp from "../assets/images/yelp.png";
import airbnb from "../assets/images/air2.png";
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
              Design and implement a <strong>BACKEND</strong> server with a database so users can perform 
                <strong> CRUD</strong> operations:
              Register, Login, .post, .get, .delete, forms, responsive design</p>
            
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
                target='_blank' class="button"
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
            <h3>Task</h3>
            <p>
              Design and implement the Frontend architecture using{" "}
              <strong>React</strong> and <strong>Redux</strong>. Collaborated
              with backend and Data Science teams.
            Register, Login, .post, .get, .put, .delete, forms, responsive design.</p>
            
            <ul style={{ listStyle: "none" }}>
            <h4>Tecnologies applied:</h4>
              <li>React</li>
              <li>Redux</li>
              <li>PREPROCESSING</li>
              <li>Forms</li>
              <li>ZEIT</li>
            </ul>
            <ul class="link">
              <a href="https://github.com/BW-YELP-FEELERS" target='_blank' class="button">
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
            <h3>Task</h3>
            <p>
              Frontend architecture implementation using <strong>React</strong>.
              To perform <strong>CRUD</strong>
              operations on the database. 
              Register, Login, .post, .get, forms, responsive design.
            </p>
            
            <ul style={{ listStyle: "none" }}>
            <h4>Tecnologies applied:</h4>
              <li>Javascript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>


            <ul class="link">
              <a href="https://github.com/AirBNBOptimalPrice" target='_blank' class="button">
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
            <h3>Task</h3>
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
                target='_blank' class="button"
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
            <p>
              Design a fully responsive static site.
            </p>
            
            <ul style={{ listStyle: "none" }}>
            <h4>Tecnologies applied:</h4>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <ul class="link">
              <a
                href="https://github.com/Surfsol/responsive-web-design-I/tree/russell-terry"
                target='_blank' class="button"
              >
                Github Code
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
