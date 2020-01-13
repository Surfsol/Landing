import React, { useState } from "react";

import  '../assets/css/login.scss'

import { useDispatch, useSelector } from "react-redux";

import { fetchLogin } from "../actions/loginAction";

const Login = () => {
  const [creds, setCreds] = useState([]);

  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const loginR = useSelector(state => state.loginReducer);

  const dispatch = useDispatch();

  const eventHandler = e => {
    e.preventDefault();
    dispatch(fetchLogin(creds));
  };

  let welcome = loginR.user.message

  if (loginR.isfetching === true) {
    welcome = (
      <>
        <div className="spin">
          <div className="spinner"></div>
          <p>please wait...</p>
        </div>
      </>
    );
    }

    let error = loginR.error.message

  
  return (
    <>
    <div className="log-wrapper">
        <div className="creds">
        <label>
          <h2>Name</h2>
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
          <h2>Password</h2>
          <input
            type="text"
            id="password"
            placeholder="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
        </label>
     
      <button onClick={eventHandler}>Submit</button>
      </div>
      <div className="welcome">
        <h2>{welcome}</h2>
        <h2>{error}</h2>
      </div>
      </div>
    </>
  );
};
export default Login;
