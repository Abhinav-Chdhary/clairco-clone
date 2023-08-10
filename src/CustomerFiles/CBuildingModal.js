import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CBuildingModal({ openModal, ...buildingProps }) {
  let buildingDetails = {
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
  const latLong = buildingDetails.geolocation.split(",");
  //format is DD
  let lat = parseFloat(latLong[0]);
  let lon = parseFloat(latLong[1].trim());
  const loadData = async () => {
    try {
      let response = await fetch(
        `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?lat=${lat}&lon=${lon}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "96c6d1bb3emsh36e1c6665ba1936p1902bdjsn80a504f557e1",
            "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
          },
        }
      );
      response = await response.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Modal
        show={true}
        onHide={() => {
          openModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {buildingDetails.building}
            {console.log(latLong[0] + "-" + latLong[1].trim())}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="building-details">
            {Object.entries(buildingDetails).map(([key, value]) => (
              <div key={key}>
                <strong>{key.replace(/_/g, " ")}</strong>: <span>{value}</span>
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
        </Modal.Footer>
      </Modal>
    </div>
  );
}
