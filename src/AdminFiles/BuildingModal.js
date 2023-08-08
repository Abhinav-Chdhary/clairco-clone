import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function BuildingModal({ openModal, ...buildingProps }) {
  let initialBuildingDetails = {
    ...buildingProps,
    has_device: buildingProps.has_device ? "Yes" : "No",
    pm_2_5: buildingProps.pm_2_5 ? "Yes" : "No",
    pm_10: buildingProps.pm_10 ? "Yes" : "No",
    co2: buildingProps.co2 ? "Yes" : "No",
    tvoc: buildingProps.tvoc ? "Yes" : "No",
    temperature: buildingProps.temperature ? "Yes" : "No",
    humidity: buildingProps.humidity ? "Yes" : "No",
  };

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
          <div className="building-details">
            {Object.entries(initialBuildingDetails).map(([key, value]) => (
              <div key={key}>
                <strong>{key.replace(/_/g, " ")}</strong>: {value}
              </div>
            ))}
          </div>
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
/*let initialBuildingDetails = {
    company: buildingProps.company,
    building: buildingProps.building,
    geolocation: buildingProps.geolocation,
    address: buildingProps.address,
    area: buildingProps.area,
    has_device: buildingProps.has_device,
    pm_2_5: buildingProps.pm_2_5,
    pm_10: buildingProps.pm_10,
    co2: buildingProps.co2,
    tvoc: buildingProps.tvoc,
    temperature: buildingProps.temperature,
    humidity: buildingProps.humidity,
  };*/
