import React, { useState } from "react";
import BuildingModal from "./BuildingModal";

export default function BuildingCard(props) {
  let buildingname = props.building;
  let building = props;
  const [modal, setModal] = useState(false);
  return (
    <div className="card m-1">
      <div className="card-body fw-bold fs-4">
        {buildingname}
        <button type="button" className="float-end btn btn-outline-danger">
          Delete
        </button>
        <button
          type="button"
          className="me-1 float-end btn btn-outline-success"
          onClick={() => {
            setModal(true);
          }}
        >
          Edit
        </button>
        {modal && <BuildingModal openModal={setModal} {...building} />}
      </div>
    </div>
  );
}
