import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { immeOauth, immeLogout } from "cycurid-widget-js";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Success from "./components/success.component";

function App() {
  const [failed, setFailed] = useState();
  const [username, setUsername] = useState();
  const [load, setLoad] = useState();
  const [token, setToken] = useState();

  const redirect_url = "https://imme-demo-login.vercel.app/";
  const client_secret = "farHtpWZH39IVDLqsWLIK43X55gTXnAwADjNc4AKubCQtSTc";
  const client_id = "j28E9IOkE3SJz44hYqBeXd6Q"; // premium
  const scope = "uuid";

  function onSuccess(data, token) {
    setUsername(data.uuid);
    setToken(token);
    console.log(username);
    console.log(data);
  }

  useEffect(() => {
    console.log("token to log out with: ", token);
    console.log(username);
  }, [token, username]);

  function onFailure(data) {
    console.log(data);
  }

  async function signIn() {
    immeOauth(
      {
        action: "login",
        client_id,
        redirect_url,
        scope,
        client_secret,
      },
      onSuccess,
      onFailure
    );
  }
  async function signUp() {
    immeOauth(
      {
        action: "register",
        client_id,
        redirect_url,
        scope,
        client_secret,
      },
      onSuccess,
      onFailure
    );
  }
  function logout() {
    // immeLogout(token.access_token, client_id, client_secret);
    setUsername(null);
    console.log(username);
  }

  useEffect(() => {
    setLoad(false);
  }, [load]);
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              CycurID
            </Link>
            {!username && (
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  !username ? (
                    <Login signIn={() => signIn} />
                  ) : (
                    <Navigate replace to="/success" />
                  )
                }
              />
              <Route
                path="/sign-in"
                element={
                  !username ? (
                    <Login signIn={() => signIn} />
                  ) : (
                    <Navigate replace to="/success" />
                  )
                }
              />
              <Route
                path="/sign-up"
                element={
                  !username ? (
                    <SignUp signUp={() => signUp} />
                  ) : (
                    <Navigate replace to="/success" />
                  )
                }
              />
              <Route
                path="/success"
                element={
                  username ? (
                    <Success logout={() => logout} userName={username} />
                  ) : (
                    <Navigate replace to="/" />
                  )
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
