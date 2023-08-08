import React, { useState } from "react";
import BuildingModal from "./BuildingModal";

export default function BuildingCard(props) {
  let buildingProps = props.buildingProps;
  const [modal, setModal] = useState(false);
  return (
    <div className="card m-1">
      <div className="card-body fw-bold fs-4">
        {buildingProps[1]}
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
        {modal && (
          <BuildingModal openModal={setModal} buildingProps={buildingProps} />
        )}
      </div>
    </div>
  );
}
