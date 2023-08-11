import React, { useEffect, useState } from "react";
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
  const [displayData, setDisplayData] = useState({});
  //format is DD
  let lat = parseFloat(latLong[0]);
  let lon = parseFloat(latLong[1].trim());

  useEffect(() => {
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
        )
          .then((response) => response.json())
          .then((displayData) => setDisplayData(displayData))
          .catch((error) => console.error("Error fetching data:", error));
        //response = await response.json();
        // console.log(response.CO);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
    const intervalId = setInterval(() => {
      console.log("I loaded");
      loadData();
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
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
          <Modal.Title>{buildingDetails.building}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="building-details">
            {Object.entries(buildingDetails).map(([key, value]) => (
              <div key={key}>
                <strong>{key.replace(/_/g, " ")}</strong>: <span>{value}</span>
              </div>
            ))}
          </div>
          {buildingDetails.has_device ? <div>YES</div> : <div>NO</div>}
          <div>
            {buildingDetails.has_device ? (
              displayData &&
              Object.keys(displayData).map((key) => (
                <div key={key}>
                  <p>
                    {key} Conc: {displayData[key].concentration}
                  </p>
                  {/* <p>AQI: {displayData[key].aqi}</p> */}
                </div>
              ))
            ) : (
              <div>....</div>
            )}
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
