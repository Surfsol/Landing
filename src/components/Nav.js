import React from 'react'
import Icons from './Icons'
import Techs from './Techs'
import ModalContact from './ContactModal'

import videoDolphin from '../assets/images/Dolphin.mp4'


import '../assets/css/nav.scss'

import git from '../assets/icons/github.png'




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
                <div className="menu-items">
                <a href="/" class="nav-btn">Home</a>
                <a href="/projects" class="nav-btn">Projects</a>
                <a href="/skills" class="nav-btn">Skills</a>
                <a  class="nav-btn"><ModalContact/></a>
                </div>
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