import axios from 'axios'

export const LOGIN_FETCH = 'LOGIN_FETCH'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

//axios.defaults.withCredentials = true;

// const transport = axios.create({
//     withCredentials: true
//   })
  
 

export const fetchLogin= (creds) => dispatch => {
    console.log(creds)
    dispatch({type:LOGIN_FETCH})

    axios
        .post(`${process.env.REACT_APP_HOST}/auth/login`, creds)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            // sessionStorage.setItem(res.sessionConfig.name , res.sessionConfig.secret)
        })
        .catch(err => {
            dispatch({type:LOGIN_FAILURE, payload:err})})
}