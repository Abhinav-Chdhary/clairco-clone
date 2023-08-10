import React, { useState } from "react";
import CBuildingModal from "./CBuildingModal";

export default function CBuildingCard({ ...details }) {
  const [modal, setModal] = useState(false);
  return (
    <div className="card m-1">
      <div className="card-body fw-bold fs-4">
        {details.building}
        <button
          type="button"
          className="me-1 float-end btn btn-outline-success"
          onClick={() => {
            setModal(true);
          }}
        >
          View
        </button>
        {modal && <CBuildingModal openModal={setModal} {...details} />}
      </div>
    </div>
  );
}
