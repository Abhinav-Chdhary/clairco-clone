import React, { useState } from "react";

export default function NewBuilding() {
  const [deviceEnabled, setDeviceEnabled] = useState(false);
  const handleDeviceButton = () => {
    setDeviceEnabled(!deviceEnabled);
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="Name of company" className="form-label">
            Name of the company
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="Name of Building" className="form-label">
            Name of the Building
          </label>
          <input type="text" className="form-control" />
        </div>
        <span>Geolocation:</span>
        <div className="mb-3 ms-3">
          <label for="Latitude" className="form-label">
            Latitude
          </label>
          <input type="text" className="form-control" />
          <label for="Longitude" className="form-label">
            Longitude
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <textarea type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="area" className="form-label">
            Area
          </label>
          <input type="text" className="form-control" />
        </div>
        <div class="form-check mb-2 d-flex">
          <label class="form-check-label" for="flexCheckChecked">
            Has Device?
          </label>
          <input
            class="form-check-input float-end ms-2"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            onClick={handleDeviceButton}
          />
        </div>
        <div>
          {deviceEnabled ? (
            <div className="d-flex flex-wrap">
              <div class="form-check form-switch">
                <label class="form-check-label" for="PM2.5">
                  PM 2.5
                </label>
                <input
                  class="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <div class="form-check form-switch">
                <label class="form-check-label" for="PM10">
                  PM 10
                </label>
                <input
                  class="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <div class="form-check form-switch">
                <label class="form-check-label" for="CO2">
                  CO<sub>2</sub>
                </label>
                <input
                  class="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <div class="form-check form-switch">
                <label class="form-check-label" for="TVOC">
                  TVOC
                </label>
                <input
                  class="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <div class="form-check form-switch">
                <label class="form-check-label" for="temperature">
                  Temperature
                </label>
                <input
                  class="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <div class="form-check form-switch">
                <label class="form-check-label" for="humidity">
                  Humidity
                </label>
                <input
                  class="form-check-input float-end ms-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
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
          <button type="button" class="btn btn-success m-1">
            Create One More Building
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
