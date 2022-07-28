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
  const [username, setUsername] = useState();
  const [load, setLoad] = useState();
  const [token, setToken] = useState();
  const config = {
    redirect_url: process.env.REACT_APP_REDIRECT_URL,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    client_id: process.env.REACT_APP_CLIENT_ID,
    scope: "uuid",
  };

  function onSuccess(data, token) {
    setUsername(data.uuid);
    setToken(token);
    console.log("Data requested from scope: ", data);
    console.log("UserName: ", data.uuid);
    console.log("Token: ", token);
  }

  function onFailure(data) {
    console.log(data);
  }

  async function signIn(e) {
    e.preventDefault();
    immeOauth({ ...config, action: "login" }, onSuccess, onFailure);
  }
  async function signUp(e) {
    e.preventDefault();
    immeOauth(config("register"), onSuccess, onFailure);
  }
  function logout() {
    immeLogout(token.access_token, config.client_id, config.client_secret);
    setUsername(null);
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
                    <Login
                      signIn={signIn}
                      setUsername={setUsername}
                      setToken={setToken}
                    />
                  ) : (
                    <Navigate replace to="/success" />
                  )
                }
              />
              <Route
                path="/sign-in"
                element={
                  !username ? (
                    <Login signIn={signIn} />
                  ) : (
                    <Navigate replace to="/success" />
                  )
                }
              />
              <Route
                path="/sign-up"
                element={
                  !username ? (
                    <SignUp signUp={signUp} />
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
