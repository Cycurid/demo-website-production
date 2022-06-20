import React, { Component } from "react";
import { ReactComponent as Logo } from "../Assets/imme icon-02.svg";
import { immeOauth, immeLogout } from "cycurid-widget-js";
export default class Login extends Component {
  redirect_url = "https://imme-demo-login.vercel.app";
  client_secret = "farHtpWZH39IVDLqsWLIK43X55gTXnAwADjNc4AKubCQtSTc";
  client_id = "j28E9IOkE3SJz44hYqBeXd6Q"; // premium
  scope = "uuid";

  render() {
    // function onSuccess(data, token) {
    //   this.props.setUsername(data.uuid);
    //   this.props.setToken(token);
    //   console.log("username", data.uuid);
    //   console.log("data", data);
    // }
    // function onFailure(data) {
    //   console.log(data);
    // }

    // async function signIn(e) {
    //   e.preventDefault();
    //   console.log("hello");
    //   immeOauth(
    //     {
    //       action: "login",
    //       client_id: this.client_id,
    //       redirect_url: this.redirect_url,
    //       scope: this.scope,
    //       client_secret: this.client_secret,
    //     },
    //     onSuccess,
    //     onFailure
    //   );
    // }
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
