import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function CustomerPrivateRoutes() {
  const customerLoggedIn = () => {
    if (localStorage.getItem("customerAuthToken")) return true;
    else return false;
  };
  return customerLoggedIn() ? <Outlet /> : <Navigate to="/" />;
}
