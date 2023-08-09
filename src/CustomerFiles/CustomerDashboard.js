import React from "react";

export default function CustomerDashboard() {
  return (
    <div>
      {localStorage.getItem("customerAuthToken") ? (
        <div className="fs-1">CustomerDashboard</div>
      ) : (
        <div>{alert("You are not authorized")}</div>
      )}
    </div>
  );
}
