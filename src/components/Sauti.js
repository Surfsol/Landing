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
import choropleth from '../assets/images/choropleth.png'
import d3 from '../assets/icons/d3js.png'

import aws from "../assets/icons/aws-icon.png";
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
            <a href="http://https://master.d27koej7wa8a94.amplifyapp.com/" target="_blank">
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
            <img src={choropleth} />
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

          <img className="techsUsed" src={d3} />
          <h3>
            <span className="colorBlue">D3.js</span>: D3.js was used to make the choropleth
            map.  Map and a legend of results are dynamically rendered to the screen.
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
          <img className="techsUsed" src={aws} />
          <h3>
            <span className="colorBlue">AWS</span>: To deploy Frontend and
            Backend
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
            The organization has been collecting data from informal trades
            in Region of Africa known as Sauti since 2017. This data
            is very valuable to Government officials, researchers and developers
            for insight to market trends, pricing and trader demographics.
          </p>
        </div>
        <div className="sautiProblem">
          <h1>The Issues</h1>

          <p>
            Since started the project as Team Lead, the site only consisted of 
            a bar chart with three filtering options.  Our task was to make the
            bar chart more dynamic by adding unlimited filtering options, a date
            picker as well as fixing overlapping value displays.
            In addition to the Bar Chart, the site needed other ways to display
            data, such as in a line graph to show trends over time.
            A long with displaying data, we wanted to make the UI more intuitive and informative.
            Creating links to social media was also very important so the site could gain 
            popularity. 
            Sauti then decided to make this a standalone app, in which most of the data
            would need to be accessed via a paywall.  So we needed to implement tiered access 
            to certain types of data and filtering tools.  While creating register, login 
            and an account page for users to manage their accounts.
            Administration tools were also needed to manage
            and track customer accounts. {" "}
          </p>
          <br></br>
        </div>
        <div className="sautiSolution">
          <h1>The Solution</h1>
          <p>
            We cleaned up the existing code, then dynamically enabled additional
            filtering on the bar chart. In addition to the date picker, we added
            buttons to quickly select filtering by year and quarter.
          </p>
          <br></br>
          <p>
            The url is now corresponds to the selected filters so users can
            share links and filtering can easily be reproduced. These links can
            also be shared on twitter and facebook.
          </p>
          <br></br>
          <p>
            A line graph was added that enables users to see monthly,
            quarterly and yearly trends based off normalized data.
          </p>
          <br></br>
          <p>
            We added an administration page that enables the admin to monitor
            and or perform crud operations on user accounts. The grid offers
            easy filtering to quickly locate accounts.
          </p>
          <br></br>
          <p>
            Paypal was added, so users can pay to access all filtering features
            on the site.
          </p>
          <br></br>
          <p>
            Users are now only able to access data based upon their tier.
            Limited filtering options are available to non paying users.
          </p>
        </div>
      </section>
    </>
  );
};
export default WellDone;
