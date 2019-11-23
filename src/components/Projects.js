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
      <section class="body-content">
        <div class="content">
          <h1>SubReddit</h1>
          <h3>Task</h3>
          <p>
            Design and build a backend with PostgreSql for production, so users can register, 
            login, and perform CRUD operations on the database.
          </p>
          <h3>Tecnologies used</h3>
          <ul>
            <a>Express</a>
            <a>BcryptJS</a>
            <a>jsonwebtoken</a>
            <a>PostgreSql</a>
            <a>sqlite3</a>
          </ul>
          <ul class="link">
            <a href="https://github.com/BuildWeek-PostHere-Subreddit" class="button">
              Get the Code
            </a>
          </ul>
        </div>
        <div class="image-body">
          <img src={subReddit} />
        </div>
      </section>

      <section class="body-content">
        <div class="image-body">
          <img src={yelp} />
        </div>

        <div class="content">
          <h1>VR Funding</h1>
          <h3>Task</h3>
          <p>
            Design a fully responsive Landing page for our group project VR
            Funding.
          </p>
          <h3>Tecnologies used</h3>
          <ul>
            <a>HTML</a>
            <a>CSS</a>
            <a>PREPROCESSING</a>
          </ul>
          <ul class="link">
            <a href="https://github.com/BW-YELP-FEELERS" class="button">
              Get the Code
            </a>
          </ul>
        </div>
      </section>

      <section class="body-content">
        <div class="content">
          <h1>Air Bnb</h1>
          <h3>Task</h3>
          <p>
            Design a fully responsive Landing page for our group project VR
            Funding.
          </p>
          <h3>Tecnologies used</h3>
          <ul>
            <a>HTML</a>
            <a>CSS</a>
            <a>Javascript</a>
          </ul>

          <h3>Functionality</h3>
          <ul>
            <a>Registration</a>
            <a>Login</a>
            <a>.get, .post</a>
            <a>forms</a>
            <a>responsive</a>
          </ul>
          <ul class="link">
            <a href="https://github.com/AirBNBOptimalPrice" class="button">
              Get the Code
            </a>
          </ul>
        </div>
        <div class="image-body">
          <img src={airbnb} />
        </div>
      </section>

      <section class="body-content">
        <div class="image-body">
          <img src={vr} />
        </div>

        <div class="content">
          <h1>VR Funding</h1>
          <h3>Task</h3>
          <p>
            Design a fully responsive Landing page for our group project VR
            Funding.
          </p>
          <h3>Tecnologies used</h3>
          <ul>
            <a>HTML</a>
            <a>CSS</a>
            <a>PREPROCESSING</a>
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
      </section>

      <section class="body-content">
        <div class="content">
          <h1>Responsive Design</h1>
          <p>
            Checkout this responsive site that adjust for tablet and mobile
            devices.
          </p>
          <ul class="link">
            <a
              href="https://github.com/Surfsol/responsive-web-design-I/tree/russell-terry"
              class="button"
            >
              Get the Code
            </a>
          </ul>
        </div>
        <div class="image-body">
          <img src={responsive} />
        </div>
      </section>
    </>
  );
};
export default Projects;
