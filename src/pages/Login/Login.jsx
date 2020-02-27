import React from "react";
import './Login.css'

const Login = isLoggedIn => {
  return (
      <form className="login-container mb-5">
        <h2 className="mt-5">Login</h2>
        <div className="form-group">
          <label for="userName">
            <h6>Username</h6>
          </label>
          <input
            placeholder="Username"
            className="col-sm-8 form-control"
          ></input>
        </div>
        <div className="form-group">
          <label for="password">
            <h6>Password</h6>
          </label>
          <input
            placeholder="Password"
            className="col-sm-8 form-control"
          ></input>
        </div>
      </form>
  );
};

export default Login;
