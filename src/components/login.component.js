import React, { Component } from "react";
import { ReactComponent as Logo } from "../Assets/imme icon-02.svg";
import { immeVerification } from "cycurid-verification-js";

export default class Login extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   first_name: 'test_firstName',
    //   last_name: 'test_lastName',
    //   document_type: 'driver_license',
    //   document_number: 'test_number0606',
    //   document_country: 'test_can',
    // };

    // this.state = {
    //   verification: {
    //     //callback: "https://e83c-209-121-124-51.ngrok.io",
    //     callback: "https://google.ca",
    //     person: {
    //       first_name: "Jordan",
    //       last_name: "MEHRTASH",
    //     },
    //     documents: {
    //       type: "driver_license",
    //       //driver_license
    //       //passport
    //       number: "HP458183",
    //       country: "can",
    //     },
    //     internal_reference: "dsafsdfasdfasdfasdf",
    //   },
    // };

    // this.state = {
    //   isVerifyingData: false
    // };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeDocumentType = this.handleChangeDocumentType.bind(this);
    this.handleChangeDocumentNumber = this.handleChangeDocumentNumber.bind(this);
    this.handleChangeDocumentCountry = this.handleChangeDocumentCountry.bind(this);
  }

  // handleChange(event) {
  //   this.setState({[event.target.name]: event.target.value});
  //   // console.log("handlechange fired!!: ", this.state.value)
  // }

  handleChangeFirstName(event) {
    this.props.setFirstName(event.target.value)
  }
  handleChangeLastName(event) {
    this.props.setLastName(event.target.value)
  }
  handleChangeDocumentType(event) {
    this.props.setDocumentType(event.target.value)
  }
  handleChangeDocumentNumber(event) {
    this.props.setDocumentNumber(event.target.value)
  }
  handleChangeDocumentCountry(event) {
    this.props.setDocumentCountry(event.target.value)
  }

  handleSubmit(event) {
    // event.preventDefault();
    // let test = this.state.first_name
    console.log(this.state);
  }
  
  
  render() {
    // if (this.state.isVerifyingData) {
      return (
        <>
          <form>
            <h3>Sign In</h3>
  
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                value={this.props.firstName}
                onChange={this.handleChangeFirstName}
                name="first_name"
              />
            </div>
  
            <div className="mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                value={this.props.lastName}
                onChange={this.handleChangeLastName}
                name="last_name"
              />
            </div>
  
            <div className="mb-3">
              <label>Document type</label>
              <select
                className="form-select"
                placeholder="Select document type"
                onChange={this.handleChangeDocumentType}
                name="document_type"
              >
                <option defaultValue="">Select document type</option>
                <option value="driver_license">Driver License</option>
                <option value="passport">Passport</option>
              </select>
            </div>
  
            <div className="mb-3">
              <label>Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Driver license number"
                value={this.props.documentNumber}
                onChange={this.handleChangeDocumentNumber}
                name="document_number"
              />
            </div>
  
            <div className="mb-3">
              <label>Document country origin</label>
              <select
                className="form-select"
                placeholder="Select country"
                onChange={this.handleChangeDocumentCountry}
                name="document_country"
              >
                <option defaultValue="">Select here</option>
                <option value="can">Canada</option>
                <option value="fra">France</option>
              </select>
            </div>
            
            {/* <div className="mb-3">
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
            </div> */}
  
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
              <button
                className="btn btn-primary"
                type='button'
                style={{
                  backgroundColor: "purple",
                  borderColor: "purple",
                  marginTop: "20px",
                }}
                // onClick={this.handleSubmit}
                onClick={this.props.verify}
                  // const verificationConfig = {
                  //   client_api_key: process.env.REACT_APP_IMME_API_KEY,
                  //   client_api_secret: process.env.REACT_APP_IMME_API_SECRET,
                  //   // verifiable_data: myUserData,
                  //   verifiable_data: this.state,
                  // };
                  
                  // immeVerification(verificationConfig);
                
              >
                {" "}
                <Logo style={{ width: "20px", marginRight: "20px" }} />
                Verify With Imme
              </button>
            </div>
          </form>
        </>
      );
    // }
    
  }
}
