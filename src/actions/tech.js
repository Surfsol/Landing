import React from 'react'
import axios from 'axios'

export const TECH_FETCH = 'TECH_FETCH';
export const TECH_SUCCESS = 'TECH_SUCCESS';
export const TECH_FAILURE = 'TECH_FAILURE';

// action creator
//fetchLog imports to Login
export const fetchTechs= () => dispatch => {
  

  // action objects

  // from thunk (see below) do some async action and dispatch an error or success action
  axios
      .get('localhost:4001/tech')
      .then(res => {
         console.log(`action-tech`,res)
        dispatch({ type: TECH_SUCCESS, payload: res.data})

        // redirect to the apps main page?
        //Route component - props.history

      })
      .catch(err =>  dispatch({ type: TECH_FAILURE, payload: err }));
};