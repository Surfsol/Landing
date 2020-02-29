import React from "react";
import '../assets/css/wellImage.scss'
import wellDash from '../assets/images/wellDash.png'

const WellImage = () => {
  return (
    <>
      <div class="bg">
          <div className="wellImageTitle">
          <h1>Well Done</h1>
          <h2>React, Redux, ag-Grid-React, React-map, Node.js,  Heroku, PostgreSQL</h2>
          </div>
        <img src={wellDash} alt="well done" />
        <div class="overlay">
          <h2>
            Check This <span>Out!</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default WellImage;
