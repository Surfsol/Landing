import React from 'react'
import Icons from './Icons'
import Techs from './Techs'

import ContactModal from './ContactModal'

import videoDolphin from '../assets/images/dolp2.mp4'

import '../assets/css/video.scss'

import git from '../assets/icons/github.png'

import { Link } from "react-router-dom";


const Video = () => {

    return(
        <>
        <header class="header container">
            <div class="fullscreen">
                {/* must be muted to play when loaded on chrome */}
                <video src={videoDolphin} autoPlay="true" loop="true" startTime="1100" muted="true"></video>
            </div>
            <div class="header-overlay"></div>
            <div class="header-content">
                <h1>Russell Terry</h1>
                <a href="/skills" class="btn">My Skills</a>
                <a href="/projects" class="btn">Projects</a>
                <a class="btn"><ContactModal/></a>
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
export default Video