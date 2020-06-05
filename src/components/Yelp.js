import React from "react";
import "../assets/css/wellImage.scss";
import yelp from "../assets/images/yelp.png";

const Yelp = () => {
  return (
    <>
      <div className="wcontainer">
        <div class="bg">
          <div className="borderImage">
            <div className="wellImageTitle">
              <h1>Yelp Feelers</h1>
              <h2>React, Redux, SAS, Forms, Zeit</h2>
              <img src={yelp} alt="Yelp" />
              <button><a
                    href="https://github.com/BW-YELP-FEELERS"
                    target="_blank"
                    style={{color: 'white', textDecoration:'none'}}
                  >
                    Github
                  </a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yelp;