
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class RegisterComponent extends Component {
  state = {
    redirect: false,
    message: ""
  };

  handleRegister = event => {
    event.preventDefault();
    if (
      this.getName.value === "" ||
      this.getAge.value === "" ||
      this.getEmail.value === "" ||
      this.getPassword.value === ""
    ) {
      this.setState({ message: "Fields cannot be empty" });
    } else {
      const data = {
        name: this.getName.value,
        age: this.getAge.value,
        email: this.getEmail.value,
        password: this.getPassword.value
      };

      this.props.dispatch({ type: "REGISTER", value: data });
      this.setState({ redirect: true, message: "Successfully Registered." });
    } //else ends here
  };

  componentDidMount = () => {
    this.setState({
      redirect: false,
      message: ""
    });
  };

  render() {
    if (this.state.redirect) {
      alert("Registered Successfully");
      return <Redirect to="/" push={true} />;
    }

    return (
      <div className="App centerForm">
        <h3 className="badge badge-danger">{this.state.message}</h3>
        <h1 className="display-6 heading-form">Register</h1>
        <form className="form-customization" onSubmit={this.handleRegister}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="vinodc45@gmail.com"
                ref={input => (this.getEmail = input)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                ref={input => (this.getPassword = input)}
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
              ref={input => (this.getName = input)}
            />
          </div>
          <div className="form-group">
            <label for="inputAge">Age</label>
            <input
              type="text"
              className="form-control"
              id="inputAge"
              placeholder="27"
              ref={input => (this.getAge = input)}
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
  }
}

export default connect()(RegisterComponent);
