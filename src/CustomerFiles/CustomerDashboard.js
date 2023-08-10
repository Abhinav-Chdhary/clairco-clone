import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CBuildingCard from "./CBuildingCard";

export default function CustomerDashboard() {
  const [buildings, setBuildings] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const loadBuildings = async () => {
      let response = await fetch(
        "http://localhost:5000/api/getCustomBuildings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            companyname: id,
          }),
        }
      );
      response = await response.json();
      setBuildings([...response]);
    };
    loadBuildings();
  }, [id]);

  return (
    <div className="container">
      <div className="fs-3 fw-bold text-success">{id}</div>
      {buildings.length > 0 ? (
        buildings.map((data) => {
          return (
            <div key={data._id}>
              <CBuildingCard {...data} />{" "}
            </div>
          );
        })
      ) : (
        <div>No Buildings added</div>
      )}
    </div>
  );
}
