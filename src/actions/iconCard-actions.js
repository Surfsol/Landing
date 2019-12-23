import axios from 'axios'


export const ICONCARD_FETCH = 'ICONCARD_FETCH'
export const ICONCARD_SUCCESS = 'ICONCARD_SUCCESS'
export const ICONCARD_FAILURE = 'ICONCARD_FAILURE' 

export const fecthIconCard = (tech) => dispatch => {
    console.log(`action id`,tech)
    axios
        //must use `` when have ${}
        .get(`https://landingbe.herokuapp.com${tech}`)
        .then(res => {
            console.log(`action/iconCard`,res.data)
            dispatch({type: ICONCARD_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type:ICONCARD_FAILURE, payload:err}))
}