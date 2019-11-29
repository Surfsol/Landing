import React from 'react'
import sql from '../assets/icons/sql.png'
import css from '../assets/icons/css-3.png'
import heroku from '../assets/icons/heroku.png'
import html5 from '../assets/icons/html5.png'
import js from '../assets/icons/js.png'
import node from '../assets/icons/nodejs.png'
import python from '../assets/icons/python.png'
import react from '../assets/icons/react.png'
import postgresql from '../assets/icons/post.png'
import http from '../assets/icons/http.png'
import redux from '../assets/icons/reduxlogo.png'

import '../assets/css/icons.scss'

import { NavLink } from "react-router-dom";

import {connect} from "react-redux"



const Icons= (props)=>{
    console.log(`icon`,props.tLink)
    // <Link to={`/tech/${sql}`}>
    //     {/* <ProfileCard fact={fact} /> */}
        
    //   </Link>

    return(
        <>
        <div className="icons"> 
        <NavLink to={`/tech/React`}>
        <img src={react}/>
        </NavLink>

        <NavLink to={`/tech/Redux`}>
        <img src={redux}/>
        </NavLink>

        <NavLink to={`/tech/Heroku`}>
        <img src={heroku}/>
        </NavLink>
        <NavLink to={`/tech/Node.js`}>
        <img src={node}/>
        </NavLink>

        <NavLink to={`/tech/Postgresql`}>
        <img src={postgresql}/>
        </NavLink>
        
        <NavLink to={`/tech/sql`}>
        <img src={sql}/>
        </NavLink>
        <NavLink to={`/tech/css`}>
        <img src={css}/>
        </NavLink>
        <NavLink to={`/tech/html`}>
        <img src={html5}/>
        </NavLink>
        <NavLink to={`/tech/js`}>
        <img src={js}/>
        </NavLink>
        <NavLink to={`/tech/python`}>
        <img src={python}/>
        </NavLink><NavLink to={`/tech/http`}>
        <img src={http}/>
        </NavLink>
        
        </div>
        </>
    )
}
const mapStateToProps = state => {
    return{
        tLink: state.techReducer.techs
    }
}
export default connect(
    mapStateToProps
)(Icons)