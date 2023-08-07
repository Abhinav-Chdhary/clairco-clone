import React from "react";
import { Link } from "react-router-dom";

export default function CustomerCard(props) {
  return (
    <div className="card m-1">
      <div className="card-body fw-bold fs-4">
        {props.companyname}
        <button type="button" className="float-end btn btn-outline-danger">
          Delete
        </button>
        <Link to={`/adminDashboard/companyBuildings/${props.companyname}`}>
          <button
            type="button"
            className="me-1 float-end btn btn-outline-success"
          >
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}
