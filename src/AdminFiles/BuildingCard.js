import React, { useState } from "react";
import BuildingModal from "./BuildingModal";
import DeleteBuildingModal from "./DeleteBuildingModal";

export default function BuildingCard(props) {
  let buildingname = props.building;
  const building_id = props._id;
  let building = props;
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div className="card m-1">
      <div className="card-body fw-bold fs-4">
        {buildingname}
        <button
          type="button"
          className="float-end btn btn-outline-danger"
          onClick={() => {
            setDeleteModal(true);
          }}
        >
          Delete
        </button>
        {deleteModal && (
          <DeleteBuildingModal
            openDeleteModal={setDeleteModal}
            name={buildingname}
            _id={building_id}
          />
        )}
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
