import React from 'react'
import axios from 'axios'

export const PRO_FETCH = 'PRO_FETCH';
export const PRO_SUCCESS = 'PRO_SUCCESS';
export const PRO_FAILURE = 'PRO_FAILURE';

// action creator
//fetchLog imports to Login
export const fetchPro= () => dispatch => {
  

  // action objects

  // from thunk (see below) do some async action and dispatch an error or success action
  axios
      .get(`${process.env.REACT_APP_HOST}/project`)
      .then(res => {
         console.log(`action-project`,res)
        dispatch({ type: PRO_SUCCESS, payload: res.data})

        // redirect to the apps main page?
        //Route component - props.history

      })
      .catch(err =>  dispatch({ type: PRO_FAILURE, payload: err }));
};