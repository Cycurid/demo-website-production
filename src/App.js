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
import {
  cycuridConnectInitialize,
  cycuridConnectLogout,
} from "cycurid-widget-js";
import { immeVerification } from "cycurid-verification-js";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Success from "./components/success.component";
import axios from "axios";

import { useInterval } from "./hooks/useInterval";

function App() {
  const [username, setUsername] = useState();
  const [userData, setUserData] = useState();
  const [load, setLoad] = useState();
  const [token, setToken] = useState();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [documentCountry, setDocumentCountry] = useState("");

  const [verifiedData, setVerifiedData] = useState({});

  // useInterval(async () => {
  //   const response = await axios.post(
  //     `${process.env.REACT_APP_SERVER2}/verification/status`,
  //     {}
  //   );
  //   setVerifiedData(response.data);
  // }, 1000 * 5);

  useEffect(() => {
    console.log(verifiedData);
  }, [verifiedData]);

  useEffect(() => {
    handleGoBack();
  }, []);

  let verificationData = [];
  const config = {
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    client_id: process.env.REACT_APP_CLIENT_ID,
    scope: ["openid", "profile", "address", "vc"],
    entity_name: "CycurID Test Entity",
  };

  const myUserData = {
    verification: {
      //callback: "https://e83c-209-121-124-51.ngrok.io",
      callback: `${process.env.REACT_APP_SERVER2}/verification`,
      person: {
        first_name: firstName,
        last_name: lastName,
      },
      documents: {
        type: documentType,
        //driver_license
        //passport
        number: documentNumber,
        country: documentCountry,
      },
      internal_reference: "dsafsdfasdfasdfasdf",
    },
  };

  const verificationConfig = {
    client_api_key: process.env.REACT_APP_IMME_API_KEY,
    client_api_secret: process.env.REACT_APP_IMME_API_SECRET,
    verifiable_data: myUserData,
  };

  function onSuccess(data, token) {
    console.log("DATA", data);
    setUsername("Test");
    setUserData(data);
    setToken(token);
    console.log("Data requested from scope: ", data);
  }

  function onFailure(data) {
    console.log(data);
  }

  async function signIn(e) {
    e.preventDefault();
    cycuridConnectInitialize(
      { ...config, action: "login" },
      onSuccess,
      onFailure
    );
  }
  async function signUp(e) {
    cycuridConnectInitialize(
      { ...config, action: "login" },
      onSuccess,
      onFailure
    );
  }
  async function verify(e) {
    console.log("verificationConfig", verificationConfig);
    e.preventDefault();
    immeVerification(verificationConfig, onSuccess, onFailure);
    console.log("verificationData", verificationData);
  }
  async function logout() {
    try {
      const response = await cycuridConnectLogout(
        token,
        config.client_id,
        config.client_secret
      );
      console.log("cycuridConnectLogout", response);
      setUsername(null);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  async function handleGoBack() {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER2}/verification/reset`,
      {}
    );
    console.log("response is:", response);
    setVerifiedData(response.data);
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
                {/* <ul className="navbar-nav ml-auto">
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
                </ul> */}
              </div>
            )}
          </div>
        </nav>
        <div style={{ marginTop: "80px" }}>
          <div className="auth-wrapper">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  !username ? (
                    Object.keys(verifiedData).length === 0 ? (
                      <>
                        <Login
                          setFirstName={setFirstName}
                          firstName={firstName}
                          setLastName={setLastName}
                          lastName={lastName}
                          setDocumentType={setDocumentType}
                          documentType={documentType}
                          setDocumentNumber={setDocumentNumber}
                          documentNumber={documentNumber}
                          setDocumentCountry={setDocumentCountry}
                          documentCountry={documentCountry}
                          signIn={signIn}
                          verify={verify}
                          setUsername={setUsername}
                          setToken={setToken}
                          verificationData={verificationData}
                        />
                      </>
                    ) : (
                      // <Navigate replace to="/success" />
                      <>
                        <h3>Response data: </h3>
                        <div style={{ display: "flex" }}>
                          <h4>First name: </h4>
                          <p style={{ marginLeft: "10px" }}>
                            {JSON.stringify(
                              verifiedData.verification.person.first_name
                            )}
                          </p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <h4>Last name: </h4>
                          <p style={{ marginLeft: "10px" }}>
                            {JSON.stringify(
                              verifiedData.verification.person.last_name
                            )}
                          </p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <h4>Document type: </h4>
                          <p style={{ marginLeft: "10px" }}>
                            {verifiedData.verification.documents.type}
                          </p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <h4>Doc number: </h4>
                          <p style={{ marginLeft: "10px" }}>
                            {JSON.stringify(
                              verifiedData.verification.documents.number
                            )}
                          </p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <h4>Doc country: </h4>
                          <p style={{ marginLeft: "10px" }}>
                            {JSON.stringify(
                              verifiedData.verification.documents.country
                            )}
                          </p>
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={handleGoBack}
                        >
                          Go back
                        </button>
                      </>
                    )
                  ) : (
                    <Navigate replace to="/success" />
                  )
                }
              />
              <Route
                path="/sign-in"
                element={
                  !username ? (
                    <>
                      <Login signIn={signIn} />
                    </>
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
                    <Success logout={() => logout} userData={userData} />
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
