import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div>
      <div
        className="fs-2 text-primary text-center shadow-lg p-3 mb-5"
        // style={{ border: "2px solid white" }}
      >
        LOGIN
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="zoom shadow-lg p-3 mb-5 bg-body rounded border text-center rounded">
          <Link
            className="btn btn-primary btn-lg m-5"
            to="/adminLogin"
            role="button"
          >
            Admin
          </Link>
        </div>
        <div className="zoom shadow-lg p-3 mb-5 bg-body rounded border text-center rounded">
          <Link
            className="btn btn-primary btn-lg m-5"
            to="/customerLogin"
            role="button"
          >
            Customer
          </Link>
        </div>
      </div>
    </div>
  );
}
