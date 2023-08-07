import React from "react";

export default function CustomerCard(props) {
  return (
    <div className="card m-1">
      <div className="card-body fw-bold fs-4">
        {props.companyname}
        <button type="button" className="float-end btn btn-outline-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
