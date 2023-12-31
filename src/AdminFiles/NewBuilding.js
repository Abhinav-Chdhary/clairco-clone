import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewBuilding() {
  let navigate = useNavigate();
  //for: the details of the building
  const initialBuildingDetails = {
    CompanyName: "",
    BuildingName: "",
    Geolocation: "",
    Address: "",
    Area: "",
    HasDevice: false,
    PM_2_5: false,
    PM_10: false,
    CO2: false,
    TVOC: false,
    Temperature: false,
    Humidity: false,
  };
  const [buildingDetails, setbuildingDetails] = useState(
    initialBuildingDetails
  );

  const onBuildingDetailsChange = (event) => {
    setbuildingDetails({
      ...buildingDetails,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitForm = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/adminNewBuilding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company: buildingDetails.CompanyName,
        building: buildingDetails.BuildingName,
        geolocation: buildingDetails.Geolocation,
        address: buildingDetails.Address,
        area: buildingDetails.Area,
        has_device: buildingDetails.HasDevice,
        pm_2_5: buildingDetails.PM_2_5,
        pm_10: buildingDetails.PM_10,
        co2: buildingDetails.CO2,
        tvoc: buildingDetails.TVOC,
        temperature: buildingDetails.Temperature,
        humidity: buildingDetails.Humidity,
      }),
    });
    const json = await response.json();
    console.log(json);

    //after all
    navigate("/adminDashboard/createWhat");
  };
  //If want to add Another building
  const handleAnotherBuidldingClick = (event) => {
    event.preventDefault();
    onSubmitForm(event);
    setbuildingDetails(initialBuildingDetails);
  };
  //for button clicks
  const onClickHandler = (e) => {
    setbuildingDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: !prevDetails[e.target.value],
    }));
  };
  return (
    <div className="container">
      <form onSubmit={onSubmitForm}>
        <div className="mb-3">
          <label htmlFor="Name of company" className="form-label">
            Name of the company
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Clairco"
            name="CompanyName"
            value={buildingDetails.CompanyName}
            onChange={onBuildingDetailsChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Name of Building" className="form-label">
            Name of the Building
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="clairco-1"
            name="BuildingName"
            value={buildingDetails.BuildingName}
            onChange={onBuildingDetailsChange}
          />
        </div>
        <div className="mb-3 ms-3">
          <label htmlFor="Geolocation" className="form-label">
            Geolocation
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="37.7749, 37.7749 (DD format only plz)"
            name="Geolocation"
            value={buildingDetails.Geolocation}
            onChange={onBuildingDetailsChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="42, 22nd Main"
            name="Address"
            value={buildingDetails.Address}
            onChange={onBuildingDetailsChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label">
            Area
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Jakkasandra"
            name="Area"
            value={buildingDetails.Area}
            onChange={onBuildingDetailsChange}
          />
        </div>
        <div className="form-check mb-2 d-flex">
          <label className="form-check-label" htmlFor="hasDevice">
            Has Device?
          </label>
          <input
            className="form-check-input float-end ms-2"
            type="checkbox"
            value={buildingDetails.HasDevice}
            name="HasDevice"
            id="flexCheckChecked"
            onClick={onClickHandler}
          />
        </div>
        <div>
          {buildingDetails.HasDevice ? (
            <div className="d-flex flex-wrap">
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="PM2.5">
                  PM 2.5
                </label>
                <input
                  className="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  name="PM_2_5"
                  value={buildingDetails.PM_2_5}
                  onClick={onClickHandler}
                />
              </div>
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="PM10">
                  PM 10
                </label>
                <input
                  className="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  name="PM_10"
                  value={buildingDetails.PM_10}
                  onClick={onClickHandler}
                />
              </div>
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="CO2">
                  CO<sub>2</sub>
                </label>
                <input
                  className="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  name="CO2"
                  value={buildingDetails.CO2}
                  onClick={onClickHandler}
                />
              </div>
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="TVOC">
                  TVOC
                </label>
                <input
                  className="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  name="TVOC"
                  value={buildingDetails.TVOC}
                  onClick={onClickHandler}
                />
              </div>
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="temperature">
                  Temperature
                </label>
                <input
                  className="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  name="Temperature"
                  value={buildingDetails.Temperature}
                  onClick={onClickHandler}
                />
              </div>
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="humidity">
                  Humidity
                </label>
                <input
                  className="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  name="Humidity"
                  value={buildingDetails.Humidity}
                  onClick={onClickHandler}
                />
              </div>
            </div>
          ) : (
            <div className="text-muted mb-2">
              You can enable device to see configs available
            </div>
          )}
        </div>

        <div className="d-inline">
          <button type="submit" className="m-1 btn btn-primary">
            Done
          </button>
          <button
            type="submit"
            className="btn btn-success m-1"
            onClick={handleAnotherBuidldingClick}
          >
            Create One More Building
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
