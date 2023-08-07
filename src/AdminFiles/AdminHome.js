import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import CustomerCard from "./CustomerCard";

export default function AdminHome() {
  const [customers, setcustomers] = useState([]);
  const loadCustomers = async () => {
    let response = await fetch("http://localhost:5000/api/getCustomers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    //console.log(response);
    setcustomers(response);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        {customers !== [] ? (
          customers.map((data) => {
            return (
              <div key={data._id}>
                <CustomerCard companyname={data.company} />
              </div>
            );
          })
        ) : (
          <div>.....</div>
        )}
      </div>
    </div>
  );
}
