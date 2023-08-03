import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewCustomer() {
  const navigate = useNavigate();
  const handleDoneClick = () => {
    navigate("/adminDashboard");
  };
  const handleCreateBuildingClick = () => {
    navigate("/adminDashboard/newBuildingForm");
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name of the company
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="d-inline">
          <button
            type="submit"
            className="m-1 btn btn-primary"
            onClick={handleDoneClick}
          >
            Done
          </button>
          <button
            type="button"
            class="btn btn-success m-1"
            onClick={handleCreateBuildingClick}
          >
            Create Building
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
