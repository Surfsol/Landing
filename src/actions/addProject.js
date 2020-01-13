import React from 'react'
import axios from 'axios'

export const ADD_FETCH = 'ADD_FETCH'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAILURE = 'ADD_FAILURE'

//to send cookie 
const transport = axios.create({
    withCredentials: true
  })

export const fetchAdd= (details) => dispatch => {
console.log(`action addproject`,details)
    transport  
        .post(`${process.env.REACT_APP_HOST}/projects`, details)
        .then(res => {
            console.log(`action/add`, res.data)
            dispatch({type:ADD_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: ADD_FAILURE, payload: err}))
}