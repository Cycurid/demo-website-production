import React, { Component } from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <hr className="my-4" />
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "orange", borderColor: "orange" }}
            onClick={this.props.signUp}
          >
            {" "}
            {/* <Logo style={{ width: "20px", marginRight: "20px" }} /> */}
            Sign Up With CycurID
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
