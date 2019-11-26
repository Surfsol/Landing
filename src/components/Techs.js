import React, {useState} from 'react'
import {connect} from 'react-redux'
import {fetchTechs} from '../actions/tech'


const Techs = (props) => {
    const [newT, setTech] = useState({tech:""})
    console.log(props.allTechs)

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
     allTechs : state.techReducer
    }; 
  };
  
export default connect(
    mapStateToProps,
    { fetchTechs }
  )(Techs);