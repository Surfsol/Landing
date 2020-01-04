import React, {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {fetchLogin} from '../actions/loginAction'


const Login = () => {
const [creds, setCreds]=useState([])


const handleChange = e => {
    e.preventDefault()
    
}

return(
    <>
    <label>
        Name
    <input
    type="text"
    id="username"
    placeholder="username"
    name="username"
    value={creds.username}
    onChange={handleChange}
    />
    </label>

    <label>
        Password
    <input
    type="text"
    id="password"
    placeholder="password"
    name="password"
    value={creds.password}
    onChange={handleChange}
    />
    </label>
    </>
)

}
export default Login