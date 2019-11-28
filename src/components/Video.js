import React from 'react'
import videoDolphin from '../assets/images/Dolphin.mp4'

import '../assets/css/video.scss'

const Video = () => {

    return(
        <>
        <header class="header container">
            <div class="fullscreen">
                <video src={videoDolphin} autoPlay="true" loop="true"></video>
            </div>
            <div class="header-overlay"></div>
            <div class="header-content">
                <h1>Overlay</h1>
                <p>Come in</p>
                <a href="#" class="btn">See my projects</a>
            </div>
            
        </header>
        </>
    )
}
export default Video