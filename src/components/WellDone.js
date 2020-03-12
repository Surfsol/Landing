import React from "react";
import "../assets/css/welldone.scss";

import Nav from "./Nav";

import wellSensor from "../assets/images/wellSensor.png";
import wellDash from "../assets/images/wellDash.png";
import wellMonitor from "../assets/images/wellDash.png";
import wellStatusSensor from "../assets/images/wellStatusSensor.png";
import wellModal from "../assets/images/wellModal.png";
import Backbutton from "./BackButton";

import ag from "../assets/images/ag-grid-react.png";
import material from "../assets/images/material-ui.png";
import redux from "../assets/icons/redux.jpg";
import react from "../assets/images/react.jpg";
import netlify from "../assets/icons/netlify.png";
import heroku from "../assets/icons/heroku.png";
import postgres from "../assets/icons/post.png";
import node from "../assets/icons/nodejs.png";

const WellDone = () => {
  return (
    <>
      <div className="wellTitle">
        <div className="back">
          <div className="buttonDiv">
            <Backbutton />
          </div>

          <h1>Well Done</h1>
        </div>
        <div>
          {" "}
          <h2>
            Deployed Site:
            <a href="https://welldone.netlify.com/" target="_blank">
              WellDone
            </a>
          </h2>
        </div>
        <br></br>
        <div>
          <div class="link">
            <a
              href="https://github.com/Lambda-School-Labs/well-done-fe"
              target="_blank"
              class="button"
            >
              <h2> Frontend Github Code</h2>
            </a>

            <a
              href="https://github.com/Lambda-School-Labs/well-done-be"
              target="_blank"
              class="button"
            >
              <h2> Backend Github Code</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="wellBody">
        <div className="wellTeam">
          <h1>Our Team</h1>
          <p>
            Our team consisted of 6 fullstack web developers, 2 UX designers and
            2 android developers. Everyone worked remotely.
          </p>
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
        <div className="tech">
          <h1>Tech Stack:</h1>
          <img className="techsUsed" src={react} />
          <h3>
            <span className="colorBlue">React</span>: Selected for fast
            rendering and conditional rendering, to limit access to components
            by user permissions. Easy to build components and can be utilized in
            various different parts of the app. A wide array of third party
            libraries can be used with React to manage state, display graphical
            data and account information.
          </h3>
          <img className="techsUsed" src={redux} />
          <h3>
            <span className="colorBlue">Redux</span>: Selected for state
            management, for ease of access to data throughout the app. Also used
            for filtering and searching through data to instantly display
            filtered data without an api call.
          </h3>
          <img className="techsUsed" src={ag} />
          <h3>
            <span className="colorBlue">AG-Grid React</span>: For its ability to
            display data in a spreadsheet like format, which comes with a
            variety of built in filtering options so users can easily access
            Account and or Sensor information. Provides well organized data and
            a pleasant user experience.
          </h3>
          <img className="techsUsed" src={material} />
          <h3>
            <span className="colorBlue"> Material-UI</span>: Easy to implement
            modals with React so users can perform crud operations.
          </h3>
          <img className="techsUsed" src={node} />
          <h3>
            <span className="colorBlue">Node.Js</span>: For ease of use and
            expandability, we used a REST framework. Can write in Javascript.
          </h3>
          <img className="techsUsed" src={postgres} />
          <h3>
            <span className="colorBlue">PostgreSQL</span>: Great for persisting
            and accessing data. Also, due to its popularity it will be
            convenient for future database management.{" "}
          </h3>
          <img className="techsUsed" src={heroku} />
          <h3>
            <span className="colorBlue">Heroku</span>: Free to deploy the
            Backend, easy to test staging.
          </h3>
          <img className="techsUsed" src={netlify} />
          <h3>
            <span className="colorBlue">Netlify</span>: Free and easy to deploy
            dynamic frontend sites.
          </h3>
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
            Although WellDone had successfully installed sensors which transmit
            reliable data. The data was almost useless because it was not
            properly stored or displayed.
          </p>
          <br></br>
          <p>
            {" "}
            Well Done was storing the data on a Prisma backend and did not have
            have a frontend built out to visualize the data. When information
            was requested about the status of a well pump. The Well Done staff
            wasted a lot of time trying to search through the backend, looking
            through various columns to determine the status of the pump.
          </p>
          <br></br>
          <p>
            So information was not visually available, many well pumps would
            stop working and no one would be alerted. This resulted in villages
            going without fresh well water, upset donors and NGOs, and a ton of
            overhead for Well Done staff members.
          </p>
        </div>
        <div className="wellSolution">
          <h1>The Solution</h1>
          <p>
            Our team created a new Backend using Node.js to organize and store
            data so it can easily be accessed. All sensor data is now being sent
            through an api and is being stored in a PostgreSQL database.
          </p>
          <br></br>
          <p>
            A new Frontend was created using React and Redux to access and
            display present and historical data. Users can quickly see current
            and historical performance of well pumps. This data is visualized
            using maps, charts and calendar displays.
          </p>
          <br></br>
          <p>
            NGOs that rely on Well Done's data can now access the site
            themselves. They have access to all sensor and account information
            related to their organization.
          </p>
          <br></br>
          <p>
            Well Done staff now has the ability to perform all crud operations
            on sensors, organizations and user accounts. Data can be accessed by
            WellDone staff, NGOs and technicians.{" "}
          </p>
          <br></br>
          <p>
            WellDone staff has access to all data, NGOs are limited to viewing
            only their pumps and account information. Technicians are only able
            to access graphical pump displays and historical data related to
            pumps.
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
            </li>
            <li>
              We performed user research with WellDone staff members to get
              better insight as to how typical users would use the site.{" "}
            </li>
            <li>
              This was followed up with technological research for potential
              solutions. These options were then illustrated by the UX design
              team.
            </li>
            <li>
              We presented options to the stakeholder and agreed upon a
              solution.
            </li>
            <li>
              Created release canvases that were approved by the stakeholder.
            </li>
            <li>
              Throughout development, only minor changes were requested by the
              stakeholders, which were easily accommodated due to our detailed
              planning, research and communication with the stakeholders.
            </li>
            <li>
              We also collaborated with the Android team to provide android
              specific endpoints in Node.js.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default WellDone;
