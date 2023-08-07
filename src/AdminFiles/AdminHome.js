import React, { useEffect } from "react";
import AdminNavbar from "./AdminNavbar";

export default function AdminHome() {
  const loadCustomers = async () => {
    let response = await fetch("http://localhost:5000/api/getCustomers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response);
  };
  useEffect(() => {
    loadCustomers();
  }, []);
  return (
    <div>
      <AdminNavbar />
    </div>
  );
}
