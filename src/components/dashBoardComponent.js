import React, { Component } from "react";
import { connect } from "react-redux";
import aiwe from "../images/aiwe.png";
import { Redirect } from "react-router-dom";

class DashBoardComponent extends Component {
  state = {
    isAdmin: false,
    isUpdating: false
  };

  handleUpdate = data => {
    this.props.dispatch({ type: "UPDATE_USER", value: data });
    console.log("update");
    this.setState({ isUpdating: true });
  };

  handleDelete = data => {
    //this.props.dispatch({ type: "DELETE", value: data });
  };

  handleAdminState = () => {
    this.setState({ isAdmin: true });
  };

  componentDidMount = () => {
    this.setState({ isUpdating: false });
  };

  render() {
    if (this.state.isUpdating) {
      return <Redirect to="/update" push={true} />;
    }

    if (!this.state.isAdmin) {
      if (this.props.dbState.currentUser.email === "admin@gmail.com") {
        this.handleAdminState();
      }
    }
    return (
      <div className="App centerForm">
        {this.state.isAdmin ? (
          <div id="admin">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.dbState.allUsers.map((data, index) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                    <td>
                      {data.email !== "admin@gmail.com" ? (
                        <button
                          className="btn btn-warning"
                          onClick={() => this.handleUpdate(data)}
                        >
                          Update
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      {data.email !== "admin@gmail.com" ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleDelete(data)}
                        >
                          Delete
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div id="userBoard">
            {" "}
            <div className="card-user card">
              <div className="imageClass">
                <img alt="..." src={aiwe} />
              </div>
              <div className="card-body">
                <div className="author">
                  <h5 className="title">
                    {this.props.dbState.currentUser.name},{" "}
                    {this.props.dbState.currentUser.age}
                  </h5>

                  <p className="description">
                    {this.props.dbState.currentUser.email}
                  </p>
                </div>
                <p className="description text-center heading-form">
                  Only Execution Matters', Be Clear
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } //render ends here
}

const mapStateToProps = state => {
  return {
    dbState: state
  };
};
export default connect(mapStateToProps)(DashBoardComponent);
