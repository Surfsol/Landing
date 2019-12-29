import axios from 'axios'
import { PRO_FAILURE } from './projects';

export const MODAL_FETCH = 'MODAL_FETCH';
export const MODAL_SUCCESS = 'MODAL_SUCCESS';
export const MODAL_FAILURE = 'MODAL_FAILURE';

export const postModal=(contact)=>dispatch => {
    console.log(`modalAction contact`,contact)
    axios
        .post(`${process.env.REACT_APP_HOST}`, contact)
        .then(res => {
            console.log(`action-project`, res)
            dispatch({type: MODAL_SUCCESS, payload:res.data})
        })
        .catch(err => dispatch({type: PRO_FAILURE, payload:err}))
}