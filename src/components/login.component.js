import React, { Component } from "react";
import { ReactComponent as Logo } from "../Assets/imme icon-02.svg";
export default class Login extends Component {
  render() {
    return (
      <>
        <form>
          <h3>Sign In</h3>

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

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          <hr className="my-4" />
          <div className="d-grid">
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "orange", borderColor: "orange" }}
              onClick={this.props.signIn}
            >
              {" "}
              <Logo style={{ width: "20px", marginRight: "20px" }} />
              Sign In With Imme
            </button>
          </div>
        </form>
      </>
    );
  }
}
