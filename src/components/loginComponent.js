import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

//connect Component with Redux
import { connect } from "react-redux";

class LoginComponent extends Component {
  state = {
    redirect: false,
    message: ""
  };

  handleLogin = event => {
    event.preventDefault();
    console.log(`${this.getEmail.value}`);
    const data = {
      email: this.getEmail.value,
      password: this.getPassword.value
    }; //data ends here

    this.props.dispatch({
      type: "LOGIN",
      value: data
    });
    console.log("Done login");
    this.setState({ redirect: true });
  };

  wrongCredMessage = () => {
    this.setState({ message: "Wrong Credentials", redirect: false });
  };

  render() {
    if (this.state.redirect) {
      if (Object.keys(this.props.currentUser).length === 0) {
        console.log(this.props.currentUser);
        this.wrongCredMessage();
      } else {
        return <Redirect to="/dashboard" push={true} />;
      }
    }
    return (
      <div className="App centerForm">
        <h3 className="badge badge-danger">{this.state.message}</h3>
        <h1 className="display-6 heading-form">Login</h1>
        <form className="form-customization" onSubmit={this.handleLogin}>
          <div className="form-group">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="vinodc45@gmail.com"
              ref={input => (this.getEmail = input)}
            />
          </div>
          <div className="form-group ">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              ref={input => (this.getPassword = input)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          &nbsp;
          <Link to="/register">
            <button className="btn btn-secondary">Register</button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStatetoProps)(LoginComponent);
