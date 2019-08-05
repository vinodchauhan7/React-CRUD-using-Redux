import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class UpdateComponent extends Component {
  state = {
    redirect: false,
    message: ""
  };

  handleUpdate = event => {
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

      this.props.dispatch({ type: "UPDATE", value: data });
      this.setState({ redirect: true, message: "Successfully Updated." });
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
      alert("Updated Successfully");
      return <Redirect to="/dashboard" push={true} />;
    }

    return (
      <div className="App centerForm">
        <h3 className="badge badge-danger">{this.state.message}</h3>
        <h1 className="display-6 heading-form">Register</h1>
        <form className="form-customization" onSubmit={this.handleUpdate}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                defaultValue={this.props.dbState.updateUser.email}
                ref={input => (this.getEmail = input)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                defaultValue={this.props.dbState.updateUser.password}
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
              defaultValue={this.props.dbState.updateUser.name}
              ref={input => (this.getName = input)}
            />
          </div>
          <div className="form-group">
            <label for="inputAge">Age</label>
            <input
              type="text"
              className="form-control"
              id="inputAge"
              defaultValue={this.props.dbState.updateUser.age}
              ref={input => (this.getAge = input)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          &nbsp;
          <Link to="/dashboard">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dbState: state
  };
};

export default connect(mapStateToProps)(UpdateComponent);
