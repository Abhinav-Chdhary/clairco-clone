import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div className="d-flex justify-content-center">
      <Link
        className="btn btn-primary btn-lg m-5"
        to="/adminLogin"
        role="button"
      >
        For Admin
      </Link>
      <Link
        className="btn btn-primary btn-lg m-5"
        to="/customerLogin"
        role="button"
      >
        For Customer
      </Link>
    </div>
  );
}
