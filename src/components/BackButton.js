import React from 'react'
import { NavLink } from "react-router-dom";

import leftarrow from '../assets/icons/leftarrow.png'

import '../assets/css/backbutton.scss'


const Back = ()=> {

    return (
        <>
        <NavLink to='/projects'>
        <img src={leftarrow} alt="back button" />
          </NavLink>
          
        </>
    )
}
export default Back