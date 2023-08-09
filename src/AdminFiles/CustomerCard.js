import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteCustomerModal from "./DeleteCustomerModal";

export default function CustomerCard(props) {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <div className="card m-1">
      <div className="card-body fw-bold fs-4">
        {props.companyname}
        <button
          type="button"
          className="float-end btn btn-outline-danger"
          onClick={() => {
            setDeleteModal(true);
          }}
        >
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
        {deleteModal && (
          <DeleteCustomerModal openDeleteModal={setDeleteModal} />
        )}
      </div>
    </div>
  );
}
