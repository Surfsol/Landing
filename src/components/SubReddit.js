import React from "react";
import "../assets/css/wellImage.scss";
import subReddit from "../assets/images/subreddit.png";

const SubReddit = () => {
  return (
    <>
      <div className="wcontainer">
        <div class="bg">
          <div className="borderImage">
            <div className="wellImageTitle">
              <h1>SubReddit Suggestor</h1>
              <h2>
                React, Redux, BcryptJS, jsonwebtoken, Node.js, Heroku,
                PostgreSQL
              </h2>
              <img src={subReddit} alt="SubReddit" />
              <button>
                <a
                  href="https://github.com/BuildWeek-PostHere-Subreddit"
                  target="_blank"
                  style={{color: 'white', textDecoration:'none'}}
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubReddit;
