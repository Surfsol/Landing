import React from "react";
import "../assets/css/welldone.scss";

import Nav from "./Nav";

import wellSensor from "../assets/images/wellSensor.png";
import wellDash from "../assets/images/wellDash.png";
import wellMonitor from "../assets/images/wellDash.png";
import wellStatusSensor from "../assets/images/wellStatusSensor.png";
import wellModal from "../assets/images/wellModal.png";

const WellDone = () => {
  return (
    <>
      <Nav />
      <section className="wellBody">
        <div className="wellTitle">
          <div>
            <h1>Well Done</h1>
            <h2>Deployed site:</h2>{" "}
            <a href="https://welldone.netlify.com/" target="_blank">
              WellDone
            </a>
            <p> username: a.com , password: 123</p>
          </div>
          <br></br>
          <div>
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
        <div className="wellPhotos">
          <div class="wellPic">
            <img src={wellDash} />
          </div>
          <div class="wellPic">
            <img src={wellSensor} />
          </div>
          <div class="wellPic">
            <img src={wellStatusSensor} />
          </div>
          <div class="wellPic">
            <img src={wellModal} />
          </div>
        </div>
        <div className="wellCurrent">
          <h1>Background</h1>
          <p>
            WellDone is a NGO that develops sensors for well pumps in remote
            locations, such as Africa and Cambodia. The sensors relay data about
            the functionality of remote wells for partner NGOs who install and
            maintain the wells. Data is not only critical for NGO to respond to
            non-functioning pumps, but is also needed for analysis, predictions,
            and to gain access to additional charitable donations.
          </p>
        </div>
        <div className="wellProblem">
          <h1>The Problem</h1>
          <p>
            Although WellDone had sensors that were sending reliable data. The
            data was almost useless because it was not being properly stored,
            was difficult to access and was not being displayed. Therefore,
            villages were going without fresh well water, donors were not happy,
            and some NGO were unable to gain access to additional funding.
          </p>
        </div>
        <div className="wellSolution">
          <h1>The Solution</h1>
          <p>
            Our team created web tools to store data that could easily be
            accessed and displayed. Graphical data quickly displays both present
            and historical well performance, status changes, and location.
            WellDone staff and NGO have the ability to perform crud operations
            on the database. Data can be accessed by WellDone staff, NGOs and
            technicians. WellDone staff has access to all data, NGOs are limited
            to viewing only their pumps and account information. And technicians
            are only able to access graphical pump displays and historical data
            related to pumps.
          </p>
        </div>
        <div className="wellTeam">
          <h1>Our Team</h1>
          <p>
            Our team consisted of 6 fullstack web developers, 2 UX designers and
            2 android developers. Everyone worked remotely.
          </p>
        </div>
        <div className="wellProcess">
          <h1>The Process</h1>
          <ul>
            <li>
              First, we collaborated as a team to understand WellDone's existing
              web architecture, business structure and goals.
            </li>
            <li>
              {" "}
              Next we researched competitors, looking for areas of opportunity.
              </li><li>
              We performed user
              research with WellDone staff members to get better insight as to how typical users
              would use the site.{" "}
            </li>
            <li>
              This was followed up with technological research for potential solutions. These options were
              then illustrated by the UX design team.
            </li>
            <li>
              We presented options to the stakeholder and agreed upon a
              solution.
            </li>
            <li>
              Created release canvases that were approved by the stakeholder.
            </li>
            <li>
              Throughout development, the stakeholders did request a few changes
              to improve the user experience, but since we had a solid agreement
              about the outcome of the project, it was easy to accommodate them.
            </li>
            <li>
              We also collaborated with the Android team to provide android
              specific endpoints in Node.js.
            </li>
          </ul>
        </div>
        <div className="tech">
          <h1>Tech Stack:</h1>
          <h3>
          <span className="colorBlue">React</span>: Selected for conditional rendering, to limit access to
            components by user permissions. Also, third party libraries used to
            manage state, display graphical data and account information.
          </h3>
          <h3>
          <span className="colorBlue">Redux</span>: Selected for state management, for ease of access to data
            throughout the app. Also used for filtering and searching through
            data, and to instantly display updated information.
          </h3>
          <h3>
          <span className="colorBlue">AG-Grid React</span>: For its ability to display data in a spreadsheet like
            format, which comes with a variety of built in filtering options so
            user can easily access Account and or Sensor information. Provides
            well organized data and a pleasant user experience.
          </h3>
          <h3>
          <span className="colorBlue"> Material-UI</span>: Easy to implement modals with React so users can
            perform crud operations.
          </h3>
          <h3>
          <span className="colorBlue">Node.Js</span>: For ease of use and expandability, we used a REST
            framework.
          </h3>
          <h3>
          <span className="colorBlue">PostgreSQL</span>: Great for persisting and accessing data. Also, due to
            its popularity it will be convenient for future database management.{" "}
          </h3>
          <h3><span className="colorBlue">Heroku</span>: Free to deploy the Backend, easy to test staging.</h3>
          <h3>
          <span className="colorBlue">Netlify</span>: For frontend deployment, free to deploy dynamic websites.
          </h3>
        </div>
      </section>
    </>
  );
};
export default WellDone;
