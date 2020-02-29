import React from 'react'
import { NavLink } from "react-router-dom";

import backbutton from '../assets/icons/backbutton.png'

import '../assets/css/backbutton.scss'


const Back = ()=> {

    return (
        <>
        <NavLink to='/projects'>
        <img src={backbutton} alt="back button" />
          </NavLink>
          
        </>
    )
}
export default Back