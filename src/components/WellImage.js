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
                React, Redux, ag-Grid-React, React-map, Node.js, Heroku,
                PostgreSQL
              </h2>
              <img src={wellDash} alt="well done" />
              <button>See Project</button>
            </div>
            
            <div class="overlay">
              <h2>Well Done</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellImage;
