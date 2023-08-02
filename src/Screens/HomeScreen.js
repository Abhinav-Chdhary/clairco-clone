import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div>
      <div
        className="fs-2 text-primary w-100 text-center"
        // style={{ border: "2px solid white" }}
      >
        LOGIN
      </div>
      <div className="d-flex justify-content-center">
        <Link
          className="btn btn-primary btn-lg m-5"
          to="/adminLogin"
          role="button"
        >
          Admin
        </Link>
        <Link
          className="btn btn-primary btn-lg m-5"
          to="/customerLogin"
          role="button"
        >
          Customer
        </Link>
      </div>
    </div>
  );
}
