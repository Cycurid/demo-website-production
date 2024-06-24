import React, { Component } from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeDocumentType = this.handleChangeDocumentType.bind(this);
    this.handleChangeDocumentNumber =
      this.handleChangeDocumentNumber.bind(this);
    this.handleChangeDocumentCountry =
      this.handleChangeDocumentCountry.bind(this);
  }

  handleChangeFirstName(event) {
    this.props.setFirstName(event.target.value);
  }
  handleChangeLastName(event) {
    this.props.setLastName(event.target.value);
  }
  handleChangeDocumentType(event) {
    this.props.setDocumentType(event.target.value);
  }
  handleChangeDocumentNumber(event) {
    this.props.setDocumentNumber(event.target.value);
  }
  handleChangeDocumentCountry(event) {
    this.props.setDocumentCountry(event.target.value);
  }

  render() {
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

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p> */}
          <hr className="my-4" />
          <div className="d-grid">
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "green", borderColor: "green" }}
              onClick={this.props.signIn}
            >
              {" "}
              {/* <Logo style={{ width: "20px", marginRight: "20px" }} /> */}
              Sign In With CycurID
            </button>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                backgroundColor: "purple",
                borderColor: "purple",
                marginTop: "20px",
              }}
              onClick={this.props.verify}
            >
              {" "}
              {/* <Logo style={{ width: "20px", marginRight: "20px" }} /> */}
              Verify With CycurID
            </button>
          </div>
        </form>
      </>
    );
  }
}
