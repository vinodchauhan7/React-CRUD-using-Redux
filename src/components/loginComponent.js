import React from "react";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className="App centerForm">
      <h1 className="display-6 heading-form">Login</h1>
      <form className="form-customization">
        <div className="form-group">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="vinodc45@gmail.com"
          />
        </div>
        <div className="form-group ">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        &nbsp;
        <Link to="/register">
          <button className="btn btn-secondary">Register</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginComponent;
