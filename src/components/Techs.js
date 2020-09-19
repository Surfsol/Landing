import React, {useState} from 'react'
import {connect} from 'react-redux'
import {fetchTechs} from '../actions/tech'


const Techs = (props) => {

    const fetchAll = (e) => {
        e.preventDefault()
        props.fetchTechs()
    }

    return(
        <>
        <form onSubmit={fetchAll}>
            <button>LOAD FUNCTIONALITIES</button>
        </form>
    
        </>
    )
}
const mapStateToProps = state => {
    return {
     allTechs : state.techReducer.techs
    }; 
  };
  
export default connect(
    mapStateToProps,
    { fetchTechs }
  )(Techs);