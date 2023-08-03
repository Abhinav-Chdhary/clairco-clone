import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-primary fixed-bottom">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-1 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-1 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span>© 2023 Clairco, Inc</span>
        </div>
      </footer>
    </div>
  );
}
