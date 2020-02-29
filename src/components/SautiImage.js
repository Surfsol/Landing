import React from "react";
import '../assets/css/wellImage.scss'
import sauti from '../assets/images/sautiData.png'

const WellImage = () => {
  return (
    <>
    <div className="container">
      <div class="bg">
          <div className="wellImageTitle">
          <h1>SautiDataBank</h1>
          <h2>React, GraphQL, Apollo, ag-Grid-React, Node.js, Heroku, MySQL</h2>
          </div>
        <img src={sauti} alt="well done" />
        <div class="overlay">
          <h2>
            Check This <span>Out!</span>
          </h2>
        </div>
      </div>
      </div>
    </>
  );
};

export default WellImage;
