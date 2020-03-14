import React from "react";

import Nav from "./Nav";

import ContactModal from "./ContactModal";

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
import aws from "../assets/icons/aws-icon.png";
import check from "../assets/icons/check.png";
import graphql from "../assets/images/graphApollo.png";
import netlify from "../assets/icons/netlify.png";

import NavNew from './NavNew'
import HeroIcons from './HeroIcons'

import "../assets/css/icons.scss";

import IconCard from "./IconCard";

import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

const Icons = props => {
  console.log(`iconCard`, props);

  return (
    <>
      <div className="navSkills">
      <NavNew />
      </div>
      <div><HeroIcons/></div>
      <div className="icon-wrapper">
        {/* <div className="techLink">
          <a href="#HTML" class="tlink">
            HTML / CSS
          </a>
          <a href="#Frontend" class="tlink">
            Frontend
          </a>
          <a href="#Backend" class="tlink">
            Backend
          </a>
          <a href="#Database" class="tlink">
            Database
          </a>
          <a href="#Hosting" class="tlink">
            Hosting
          </a>
        </div> */}
        <div className="icons">
          <div className="icon-name">
            <h2>HTML / CSS</h2>
            <div className="iconsGroup">
              <NavLink className="active" to={`/techsProject/HTML`}>
                <img src={html5} alt="html" />
                <h5>HTML </h5>
              </NavLink>

              <NavLink className="active" to={`/techsProject/SASS`}>
                <img src={sass} alt="sass" />
                <h5>SASS</h5>
              </NavLink>

              <NavLink className="active" to={`/techsProject/LESS`}>
                <img src={less} alt="less" />
                <h5>LESS</h5>
              </NavLink>
            </div>
          </div>

          <div className="icon-name">
            <h2>Frontend</h2>
            <div className="iconsGroup">
              <NavLink className="active" to={`/techsProject/React`}>
                <img src={react} alt="react" />
                <h5>React</h5>
              </NavLink>

              <NavLink className="active" to={`/techsProject/Redux`}>
                <img src={redux} alt="redux" />
                <h5>Redux</h5>
              </NavLink>
              <NavLink className="active" to={`/project/sauti`}>
                <img src={graphql} alt="graphql apollo" />
                <h5>GraphQl + Apollo</h5>
              </NavLink>
              <NavLink className="active" to={`/techsProject/Javascript`}>
                <img src={js} alt="javascript" />
                <h5>Javascript</h5>
              </NavLink>
            </div>
          </div>

          <div className="icon-name">
            <h2 id="Backend">Backend</h2>
            <div className="iconsGroup">

              <NavLink className="active" to={`/techsProject/Node.js`}>
                <img src={node} alt="node.js" />
                <h5> Node.js</h5>
              </NavLink>

              <NavLink className="active" to={`/project/sauti`}>
                <img src={graphql} alt="graphql apollo" />
                <h5>GraphQl + Apollo</h5>
              </NavLink>

              {/* <NavLink className="active" to={`/techsProject/Python`}>
                <img src={python} alt="python" />
                <h5>Python</h5>
              </NavLink> */}

              <NavLink className="active" to={`/techsProject/Django`}>
                <img src={django} alt="django" />
                <h5>django</h5>
              </NavLink>

              <NavLink className="active" to={`/techsProject/Testing`}>
                <img src={check} alt="testing" />
                <h5>Testing</h5>
              </NavLink>
            </div>
          </div>

          <div className="icon-name">
            <h2 id="Database">Database</h2>
            <div className="iconsGroup">
              <NavLink className="active" to={`/techsProject/PostgreSQL`}>
                <img src={postgresql} alt="postgresql" />
                <h5>PostgreSQL </h5>
              </NavLink>

              <NavLink className="active" to={`/techsProject/Sql`}>
                <img src={sql} alt="sql" />
                <h5>Sql</h5>
              </NavLink>
            </div>
          </div>
          <div className="icon-name">
            <h2 id="Hosting">Hosting</h2>
            <div className="iconsGroup">
              <NavLink className="active" to={`/techsProject/Heroku`}>
                <img src={heroku} alt="heroku" />
                <h5>Heroku</h5>
              </NavLink>

              <NavLink className="active" to={`/techsProject/AWS`}>
                <img src={aws} alt="aws" />
                <h5>Aws</h5>
              </NavLink>
              <NavLink className="active" to={`/project/sauti`}>
                <img src={netlify} alt="netlify" />
                <h5>Netlify</h5>
              </NavLink>
            </div>
          </div>
        </div>
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
