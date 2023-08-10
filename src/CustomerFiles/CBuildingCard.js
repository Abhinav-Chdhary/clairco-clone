import React from "react";

export default function CBuildingCard({ ...details }) {
  return (
    <div className="card m-1">
      <div className="card-body fw-bold fs-4">
        {details.building}
        <button
          type="button"
          className="me-1 float-end btn btn-outline-success"
        >
          View
        </button>
      </div>
    </div>
  );
}
