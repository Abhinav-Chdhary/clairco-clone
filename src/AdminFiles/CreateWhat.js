import React from "react";
import { Link } from "react-router-dom";

export default function CreateWhat() {
  return (
    <div className="d-flex flex-column">
      <div>
        <Link
          className="btn btn-danger btn-lg ms-3"
          to="/adminDashboard"
          role="button"
        >
          Back
        </Link>
      </div>
      <div className="container d-flex justify-content-evenly">
        <div className="zoom shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column border text-center rounded">
          <Link
            className="btn btn-primary btn-lg m-5"
            to="/adminDashboard/newBuildingForm"
            role="button"
          >
            New Property
          </Link>
          <span className="text-decoration-underline">
            For existing customers only!
          </span>
        </div>
        <div className="zoom shadow-lg p-3 mb-5 bg-body rounded border text-center rounded">
          <Link
            className="btn btn-primary btn-lg m-5 "
            to="/adminDashboard/newCustomerForm"
            role="button"
          >
            New Customer
          </Link>
        </div>
      </div>
    </div>
  );
}
