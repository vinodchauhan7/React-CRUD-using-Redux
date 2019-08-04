import React, { Component } from "react";
import { connect } from "react-redux";
import aiwe from "../images/aiwe.png";

class DashBoardComponent extends Component {
  render() {
    return (
      <div className="App centerForm">
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
    );
  } //render ends here
}

const mapStateToProps = state => {
  return {
    dbState: state
  };
};
export default connect(mapStateToProps)(DashBoardComponent);
