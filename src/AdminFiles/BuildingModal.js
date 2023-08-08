import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function BuildingModal({ openModal, ...buildingProps }) {
  let initialBuildingDetails = { ...buildingProps };

  const [buildingDetails, setBuildingDetails] = useState(
    initialBuildingDetails
  );
  return (
    <div>
      <Modal
        show={true}
        onClick={() => {
          openModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{buildingDetails.building}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{buildingDetails.building}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              openModal(false);
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              openModal(false);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
