import React from 'react'
import Icons from './Icons'
import Techs from './Techs'

import videoDolphin from '../assets/images/Dolphin.mp4'


import '../assets/css/nav.scss'

import git from '../assets/icons/github.png'

import { Link } from "react-router-dom";


const NavBar = () => {

    return(
        <>
        <header class="nav ncontainer">
            <div class="nav">
                <video src={videoDolphin} autoPlay="true" loop="true"></video>
            </div>
            <div class="nav-overlay"></div>
            <div class="nav-content">
                <h1>Russell Terry</h1>
                <a href="#ICON" class="nav-btn">My Skills</a>
                <a href="/group" class="nav-btn">Group Projects</a>
                <a href="/addproject" class="nav-btn">Manage Projects</a>
                <div class="git">
                <a href="https://github.com/Surfsol" target="_blank">
                    <img src={git}/>
                    <p>Github/surfsol</p>
                    </a>
                </div>
            </div>
            
        </header>
       
     
        </>
    )
}
export default NavBar