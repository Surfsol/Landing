import React from 'react'
import axios from 'axios'
import { TECH_FETCH } from './tech'

export const ICONCARD_FETCH = 'ICONCARD_FETCH'
export const ICONCARD_SUCCESS = 'ICONCARD_SUCCESS'
export const ICONCARD_FAILURE = 'ICONCARD_FAILURE' 

export const fecthIconCard = (id) => dispatch => {
    console.log(`action id`,id)
    axios
        //must use `` when have ${}
        .get(`http://localhost:4001/techInProject/${id}`)
        .then(res => {
            console.log(`action/iconCard`,res.data)
            dispatch({type: ICONCARD_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type:ICONCARD_FAILURE, payload:err}))
}