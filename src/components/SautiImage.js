import React from "react";
import '../assets/css/wellImage.scss'
import sauti from '../assets/images/sautiData.png'

const WellImage = () => {
  return (
    <>
    <div className="container">
      <div class="bg">
      <div className='clickDetails'><h2>Click for Details!</h2></div>
          <div className="wellImageTitle">
          <h1>SautiDataBank</h1>
          <h2>React, GraphQL, Apollo, ag-Grid-React, Node.js, Heroku, MySQL</h2>
          </div>
        <img src={sauti} alt="well done" />
        <div class="overlay">
          <h2>
            Project Overview
          </h2>
        </div>
      </div>
      </div>
    </>
  );
};

export default WellImage;
