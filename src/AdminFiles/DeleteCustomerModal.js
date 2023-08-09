import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteCustomerModal({
  openDeleteModal,
  ...companyDetails
}) {
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
            Are you sure you want to delete{" "}
            <strong> "{companyDetails.company}"</strong> and all it's buildings
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
          <Button variant="primary">Yes, I am.</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
