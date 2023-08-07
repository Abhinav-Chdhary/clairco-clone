import React from "react";
import AdminHome from "./AdminHome";
//import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="text-primary container">
      {localStorage.getItem("adminAuthToken") ? (
        <div>
          <AdminHome />
          {window.location.reload}
        </div>
      ) : (
        <div>{alert("You are not authorized")}</div>
      )}
    </div>
  );
}
