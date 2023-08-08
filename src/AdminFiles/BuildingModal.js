import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function BuildingModal({ openModal, ...buildingProps }) {
  const _data_id = buildingProps._id;
  let initialBuildingDetails = {
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
  };

  const [buildingDetails, setBuildingDetails] = useState(
    initialBuildingDetails
  );
  //input change
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setBuildingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  //submit changes
  const saveChanges = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/adminUpdateBuilding",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: _data_id,
            company: buildingDetails.company,
            building: buildingDetails.building,
            geolocation: buildingDetails.geolocation,
            address: buildingDetails.address,
            area: buildingDetails.area,
            has_device: buildingDetails.has_device,
            pm_2_5: buildingDetails.pm_2_5,
            pm_10: buildingDetails.pm_10,
            co2: buildingDetails.co2,
            tvoc: buildingDetails.tvoc,
            temperature: buildingDetails.temperature,
            humidity: buildingDetails.humidity,
          }),
        }
      );

      const json = await response.json();
      console.log(json.success);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div>
      <Modal
        show={true}
        onHide={() => {
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
                <strong>{key.replace(/_/g, " ")}</strong>:{" "}
                {typeof value === "boolean" ? (
                  <input
                    type="checkbox"
                    checked={buildingDetails[key]}
                    name={key}
                    value={buildingDetails[key]}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{value}</span>
                )}
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
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
