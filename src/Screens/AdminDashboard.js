import React from "react";
//import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="text-primary container">
      {localStorage.getItem("adminAuthToken") ? (
        <div>AdminDashboard</div>
      ) : (
        <div>{alert("You are not authorized")}</div>
      )}
    </div>
  );
}
