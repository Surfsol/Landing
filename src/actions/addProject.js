import React from 'react'
import axios from 'axios'

export const ADD_FETCH = 'ADD_FETCH'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAILURE = 'ADD_FAILURE'

export const fetchAdd= (details) => dispatch => {
console.log(`action addproject`,details)
    axios  
        .get('localhost:4001/pt', details)
        .then(res => {
            console.log(`action/add`, res.data)
            dispatch({type:ADD_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: ADD_FAILURE, payload: err}))
}