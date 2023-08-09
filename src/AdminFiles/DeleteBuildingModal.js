import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteBuildingModal({ openDeleteModal, name, _id }) {
  const handleDelete = (event) => {
    console.log(_id);
    openDeleteModal(false);
  };
  return (
    <div>
      <Modal
        show={true}
        onHide={() => {
          openDeleteModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Are you sure you want to delete building <strong> "{name}"</strong>{" "}
            permanently?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              openDeleteModal(false);
            }}
          >
            No!
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes, I am.
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
