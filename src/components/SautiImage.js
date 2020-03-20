import React from "react";
import "../assets/css/sautiImage.scss";
import sauti from "../assets/images/sautiData.png";

const WellImage = () => {
  return (
    <>
      <div className="scontainer">
        <div class="bg">
          <div className="borderImage">
            <div className="sautiImageTitle">
              <h1>Sauti DataBank</h1>
              <h2>
                React, GraphQL, Apollo, ag-Grid-React, Node.js, AWS, MySQL
              </h2>

              <img src={sauti} alt="Sauti DataBank" />
              <button>See Project</button>
            </div>
            <div class="overlay">
              <h2>Sauti DataBank</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellImage;
