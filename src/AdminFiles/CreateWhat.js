import React from "react";
import { Link } from "react-router-dom";

export default function CreateWhat() {
  return (
    <div className="container d-flex justify-content-evenly">
      <div className="zoom shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column border text-center rounded">
        <Link
          className="btn btn-primary btn-lg m-5"
          to="/adminLogin"
          role="button"
        >
          New Property
        </Link>
        <span className="text-decoration-underline">
          For existing customers only
        </span>
      </div>
      <div className="zoom shadow-lg p-3 mb-5 bg-body rounded border text-center rounded">
        <Link
          className="btn btn-primary btn-lg m-5 "
          to="/customerLogin"
          role="button"
        >
          New Customer
        </Link>
      </div>
    </div>
  );
}
