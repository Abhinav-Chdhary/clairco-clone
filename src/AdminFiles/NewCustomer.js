import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";

export default function NewCustomer() {
  const navigate = useNavigate();
  //for details of customer
  const initialCustomerDetails = {
    CompanyName: "",
    Email: "",
    Password: "",
  };
  const [customerDetails, setcustomerDetails] = useState(
    initialCustomerDetails
  );
  const handleCustomerDetailsChange = (event) => {
    setcustomerDetails({
      ...customerDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleDoneClick = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/adminNewCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company: customerDetails.CompanyName,
        email: customerDetails.Email,
        password: customerDetails.Password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) console.log("ohh not working");
    //after all go back to dashboard
    navigate("/adminDashboard");
  };
  const handleCreateBuildingClick = (event) => {
    event.preventDefault();
    handleDoneClick(event);
    //navigate("/adminDashboard/newBuildingForm");
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name of the company
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="clairco"
            name="CompanyName"
            value={customerDetails.CompanyName}
            onChange={handleCustomerDetailsChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="clair@gmail.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Email"
            value={customerDetails.Email}
            onChange={handleCustomerDetailsChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="123@saymyname"
            name="Password"
            value={customerDetails.Password}
            onChange={handleCustomerDetailsChange}
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
            className="btn btn-success m-1"
            onClick={handleCreateBuildingClick}
          >
            Create Building
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
