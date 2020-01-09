import axios from 'axios'

export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

//axios.defaults.withCredentials = true;

const transport = axios.create({
    withCredentials: true
  })
  
 

export const fetchLogin= (creds) => dispatch => {
    console.log(creds)
    dispatch({type:LOGIN_FETCH})

    transport
        .post(`${process.env.REACT_APP_HOST}`, creds)
        .then(res => {
            console.log(res)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type:LOGIN_FAILURE, payload:err}))
}