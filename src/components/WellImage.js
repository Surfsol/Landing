import React from "react";
import "../assets/css/wellImage.scss";
import wellDash from "../assets/images/wellDash.png";

const WellImage = () => {
  return (
    <>
      <div className="wcontainer">
        <div class="bg">
          <div className="borderImage">
            <div className="wellImageTitle">
              <h1>Well Done</h1>
              <h2>
                React, Redux, MapBox, ag-Grid-React, Node.js, Heroku,
                PostgreSQL
              </h2>
              <img src={wellDash} alt="well done" />
              <button>Project Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellImage;
