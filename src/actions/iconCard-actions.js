import axios from 'axios'


export const ICONCARD_FETCH = 'ICONCARD_FETCH'
export const ICONCARD_SUCCESS = 'ICONCARD_SUCCESS'
export const ICONCARD_FAILURE = 'ICONCARD_FAILURE' 

export const fecthIconCard = (tech) => dispatch => {
    axios
        //must use `` when have ${}
        .get(`${process.env.REACT_APP_HOST}${tech}`)
        .then(res => {
            console.log(`action/iconCard`,res.data)
            dispatch({type: ICONCARD_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type:ICONCARD_FAILURE, payload:err}))
}