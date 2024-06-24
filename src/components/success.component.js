import React, { Component } from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";

export default class Success extends Component {
  render() {
    console.log("data Here", this.props.userData);
    return (
      <>
        <h3>Successfully Logged In</h3>
        {Object.keys(this.props.userData.claims).map((obj, i) => {
          return (
            <h4 className="text-center" style={{ color: "black" }}>
              {obj}: {this.props.userData.claims[obj]}
            </h4>
          );
        })}
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "orange", borderColor: "orange" }}
            onClick={this.props.logout()}
          >
            {" "}
            {/* <Logo style={{ width: "20px", marginRight: "20px" }} /> */}
            Sign Out With CycurID
          </button>
        </div>
      </>
    );
  }
}
