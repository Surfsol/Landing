import axios from 'axios'

export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const fetchLogin= (creds) => dispatch => {
    dispatch({type:LOGIN_FETCH})

    axios
        .post(`${process.env.REACT_APP_HOST}/pt`, creds)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type:LOGIN_FAILURE, payload:err}))
}