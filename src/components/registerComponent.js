import React from "react";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  return (
    <div className="App centerForm">
      <h1 className="display-6 heading-form">Register</h1>
      <form className="form-customization">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="vinodc45@gmail.com"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Vinod Chauhan"
          />
        </div>
        <div className="form-group">
          <label for="inputAge">Age</label>
          <input
            type="text"
            className="form-control"
            id="inputAge"
            placeholder="27"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        &nbsp;
        <Link to="/login">
          <button className="btn btn-secondary">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default RegisterComponent;
