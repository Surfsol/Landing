import React from "react";
import sql from "../assets/icons/sql.png";
import sass from "../assets/icons/sass.png";
import heroku from "../assets/icons/heroku.png";
import html5 from "../assets/icons/html5.png";
import js from "../assets/icons/js.png";
import node from "../assets/icons/nodejs.png";
import python from "../assets/icons/python.png";
import react from "../assets/icons/react.png";
import postgresql from "../assets/icons/post.png";
import http from "../assets/icons/http.png";
import redux from "../assets/icons/reduxlogo.png";
import less from "../assets/icons/less.png";
import django from "../assets/icons/django.png";

import "../assets/css/icons.scss";

import IconCard from './IconCard'

import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

const Icons = props => {
  console.log(`iconCard`, props);

  return (
    <>
      <h2>Discover projects by technologies:</h2>
      <div className="icons">
        <NavLink className="active" to={`/techInProject/1`}>
          <img src={react} alt="react" />
          <h5>React</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/2`}>
          <img src={redux} alt="redux" />
          <h5>Redux</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/18`}>
          <img src={node} alt="node.js" />
          <h5> Node.js</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/js`}>
          <img src={js} alt="javascript" />
          <h5>Javascript</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/html`}>
          <img src={html5} alt="html" />
          <h5>HTML </h5>
        </NavLink>

        <NavLink className="active" to={`/tech/sass`}>
          <img src={sass} alt="sass" />
          <h5>SASS</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/less`}>
          <img src={less} alt="less" />
          <h5>LESS</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/http`}>
          <img src={http} alt="http-requests" />
          <h5>Http-requests</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/Postgresql`}>
          <img src={postgresql} alt="postgresql" />
          <h5>Postgresql </h5>
        </NavLink>

        <NavLink className="active" to={`/tech/sql`}>
          <img src={sql} alt="sql" />
          <h5>Sql</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/python`}>
          <img src={python} alt="python" />
          <h5>Python</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/django`}>
          <img src={django} alt="django" />
          <h5>django</h5>
        </NavLink>

        <NavLink className="active" to={`/tech/Heroku`}>
          <img src={heroku} alt="heroku" />
          <h5>Heroku</h5>
        </NavLink>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    tLink: state.techReducer.techs
  };
};
export default connect(mapStateToProps)(Icons);
