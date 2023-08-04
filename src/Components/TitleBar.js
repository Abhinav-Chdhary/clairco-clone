import React from "react";
import { Link } from "react-router-dom";

export default function TitleBar() {
  return (
    <div className="text-primary fixed-top bg-light">
      <header className=" d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-1 text-primary">Clairco</span>
        </Link>
      </header>
    </div>
  );
}
