import React, { Component } from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";

const flattenClaims = (claims) => {
  const flattened = [];
  for (const key in claims) {
    if (claims.hasOwnProperty(key)) {
      const subClaims = claims[key];
      flattened.push({ title: key, properties: subClaims });
    }
  }
  return flattened;
};

export default class Success extends Component {
  render() {
    const flattenedClaims = flattenClaims(this.props.userData.claims);

    console.log("data Here", this.props.userData.claims);
    console.log("flattenedClaims", flattenedClaims);
    return (
      <>
        <div className="container" style={{ padding: "60px" }}>
          <h3 style={{ marginBottom: "60px" }}>Successfully Logged In</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr ",
              gap: "20px",
            }}
          >
            {flattenedClaims.map((claim, i) => (
              <div key={i}>
                <h5
                  className="text-left"
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    textTransform: "capitalize",
                  }}
                >
                  {claim.title}
                </h5>
                <div>
                  {Object.keys(claim.properties).map((prop, j) => (
                    <p className="text-left" style={{ color: "black" }} key={j}>
                      {prop}:{" "}
                      {Array.isArray(claim.properties[prop])
                        ? claim.properties[prop].join(", ")
                        : claim.properties[prop]}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: "orange",
                borderColor: "orange",
              }}
              onClick={this.props.logout()}
            >
              {" "}
              {/* <Logo style={{ width: "20px", marginRight: "20px" }} /> */}
              Sign Out With CycurID
            </button>
          </div>
        </div>
      </>
    );
  }
}
