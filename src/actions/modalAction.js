import axios from 'axios'
import { PRO_FAILURE } from './projects';

export const MODAL_FETCH = 'MODAL_FETCH';
export const MODAL_SUCCESS = 'MODAL_SUCCESS';
export const MODAL_FAILURE = 'MODAL_FAILURE';

//for Twilio whatsapp
//cannot post to Twilio
export const postModal=(contact)=>dispatch => {
    console.log(`modalAction contact`,contact)

    dispatch({type: MODAL_FETCH})
    axios
        .get(`${process.env.REACT_APP_HOST}/twilio`, contact)
        .then(res => {
            console.log(`twilio action`,res)
            dispatch({type: MODAL_SUCCESS, payload:res.data})
        })
        .catch(err => dispatch({type: PRO_FAILURE, payload:err}))
}

//for nodemailer
export const mailerModal=(contact)=>dispatch => {
    console.log(`modalAction mailer`,contact)

    dispatch({type: MODAL_FETCH})
    axios
        .post(`https://landingbe.herokuapp.com/mailer`, contact)
        .then(res => {
            console.log(`action-nodemailer`, res)
            dispatch({type: MODAL_SUCCESS, payload:res.data})
        })
        .catch(err => dispatch({type: PRO_FAILURE, payload:err}))
}