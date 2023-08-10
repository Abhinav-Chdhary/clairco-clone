import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminPrivateRoutes() {
  const adminLoggedIn = () => {
    if (localStorage.getItem("adminAuthToken")) return true;
    else return false;
  };
  return adminLoggedIn() ? <Outlet /> : <Navigate to="/" />;
}
