import React from "react";
import "../assets/css/wellImage.scss";
import wellDash from "../assets/images/wellDash.png";

const WellImage = () => {
  return (
    <>
      <div className="container">
        <div class="bg">
          <div className="clickDetails">
            <h2>Click for Details!</h2>
          </div>
          <div className="borderImage">
            <div className="wellImageTitle">
              <h1>Well Done</h1>
              <h2>
                React, Redux, ag-Grid-React, React-map, Node.js, Heroku,
                PostgreSQL
              </h2>
            </div>
            <img src={wellDash} alt="well done" />
            <div class="overlay">
              <h2>Project Overview</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellImage;
