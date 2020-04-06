import React from "react";
import "../assets/css/sauti.scss";

import Nav from "./Nav";

import ag from "../assets/images/ag-grid-react.png";
import material from "../assets/images/material-ui.png";
import graphql from "../assets/images/graphApollo.png";
import react from "../assets/images/react.jpg";
import sautiAccounts from "../assets/images/sautiAccounts1.png";
import filters from "../assets/images/sautifilter.png";
import line from "../assets/images/sautiLine.png";
import sautiDisplay from "../assets/images/sautiDisplay.png";
import Backbutton from "./BackButton";

import netlify from "../assets/icons/netlify.png";
import heroku from "../assets/icons/heroku.png";
import postgres from "../assets/icons/post.png";
import node from "../assets/icons/nodejs.png";

const WellDone = () => {
  return (
    <>
      <div className="sautiTitle">
        <div className="back">
          <div className="buttonDiv">
            <Backbutton />
          </div>

          <h1>Sauti DataBank</h1>
        </div>
        <div className="siteLink">
          {" "}
          <h2>
            
            <a href="http://databank.sautiafrica.org/" target="_blank">
            http://databank.sautiafrica.org/
            </a>
          </h2>
        </div>
        <br></br>
        <div>
          <div class="link">
            <a
              href="https://github.com/Lambda-School-Labs/sauti-databank-fe"
              target="_blank"
              class="button"
            >
              <h2> Frontend Github Code</h2>
            </a>

            <a
              href="https://github.com/Lambda-School-Labs/sauti-databank-be"
              target="_blank"
              class="button"
            >
              <h2> Backend Github Code</h2>
            </a>
          </div>
        </div>
      </div>
      <section className="sautiBody">
        <div className="sautiTeam">
        
          <h1>Team Lead: Russell Terry</h1>
          <p>
            Our team consisted of 6 fullstack web developers. Everyone worked
            remotely.
          </p>
        </div>
        <div className="sautiPhotos">
          <div class="sautiPic">
            <img src={sautiDisplay} />
          </div>
          <div class="sautiPic">
            <img src={line} />
          </div>

          <div class="sautiPic">
            <img src={sautiAccounts} />
          </div>
          <div class="sautiPic">
            <img src={filters} />
          </div>
        </div>
        <div className="sautitech">
          <h1>Tech Stack:</h1>
          <img className="techsUsed" src={react} />
          <h3>
            <span className="colorBlue">React</span>: When our team inherited
            the project React was already being used. We stuck with React
            because it was easy to build additional components on top of the
            existing page and for Reacts ability to conditionally Render
            components. This was especially valuable when we blocked off certain
            functionality based on the user's tier.
          </h3>
          <img className="techsUsed" src={graphql} />
          <h3>
            <span className="colorBlue">Graphql</span>: We inherited the project
            with graphql already implemented. Graphql was a wise decision for
            this app due to its ability to query specific data. Whereas, on a
            REST framework we would have to deal with many endpoints and do .get
            requests on large amounts of unneeded data.
          </h3>

          <img className="techsUsed" src={ag} />

          <h3>
            <span className="colorBlue">AG-Grid React</span>: We selected
            Ag-grid-react for its ability to display account information in a
            spreadsheet like format, which comes with a variety of built in
            filtering options so staff members can easily access and filter
            through account information. The grid receives all account
            information from the backend by making a query through
            apollo/graphql. We also added additional columns to the grid to
            allow editing and deleting functionality of selected accounts
            displayed within the grid.
          </h3>

          <img className="techsUsed" src={material} />

          <h3>
            <span className="colorBlue"> Material-UI</span>: We used material-ui
            to implement modals used for logging in, registering and performing
            crud operation on user accounts.
          </h3>
          <img className="techsUsed" src={node} />
          <h3>
            <span className="colorBlue">Node.Js</span>: This was also inherited.
            Node.js is easy to use, because we were using javascript and it is
            expandable.;
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
        <div className="sautiCurrent">
          <h1>Background</h1>
          <p>
            {" "}
            Sauti is a non-profit organization that caters to cross-boarder
            traders who need assistance with current market prices,
            documentation and legal procedures.
            <a href="http://sautiafrica.org/" target="_blank" class="button">
              Sauti's informational site
            </a>
          </p>
          <br></br>
          <p>
            The organization has been collecting data related to individual
            traders of produce, goods and materials throughout a Region of
            Africa known as Sauti since 2017. This data is very valuable to
            Government officials, researchers and developers for insight to
            market trends, pricing and trader demographics.
          </p>
        </div>
        <div className="sautiProblem">
          <h1>The Problem</h1>

          <p>
            Sauti has not implemented a user interface with proper filtering
            features and displays for interested parties to utilize the data.
            They would also like to have users log into the site, and make
            payment to gain access to special filtering and downloading
            functions.{" "}
          </p>
          <br></br>
        </div>
        <div className="sautiSolution">
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

        <div className="sautiProcess">
          <h1>The Process</h1>
          <ul>
            <li>
              First, we took the time to understand the existing architecture.
              The backend consisted of Node.js, Graphql and a MySQL database.
              The Frontend was using React, Graphql and Nivo to display charts.
            </li>
            <li>
              {" "}
              After understanding the architecture, we took the time to research
              ways we could improve upon it. We spent a lot of time researching
              Graphql and Apollo, and Nivo for displaying graphs.
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
      </section>
    </>
  );
};
export default WellDone;
