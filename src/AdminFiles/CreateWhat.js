import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function CreateWhat() {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="d-flex flex-column">
      <div>
        <Button
          className="btn btn-danger btn-lg ms-3"
          onClick={goBack}
          role="button"
        >
          Back
        </Button>
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
