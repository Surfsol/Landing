import React, {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'


const Login = () => {
const [creds, setCreds]=useState([])


return(
    <>
    <lable>
        Name
    <input
    type="text"
    id="username"
    placeholder="username"
    name="username"
    value={creds.username}
    //onChange={handleChange}
    />
    </lable>
    </>
)

}
export default Login