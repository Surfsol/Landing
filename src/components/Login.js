import React, { useState } from "react";

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

  if (loginR.isfetching === true) {
    return (
      <>
        <div className="spin">
          <div className="spinner"></div>
          <p>please wait...</p>
        </div>
      </>
    );
  }

  if (loginR.user.length > 0) {
    return (
      <div>
        <p>Welcome ${loginR.user.username}</p>
      </div>
    );
  }

  return (
    <>
      <h2>
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
        </h2>
        <h2>
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
      </h2>
      <button onClick={eventHandler}>Submit</button>
    </>
  );
};
export default Login;
