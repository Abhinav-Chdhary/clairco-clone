import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BuildingCard from "./BuildingCard";

export default function CompanyBuildings() {
  const { id } = useParams();
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const loadBuildings = async () => {
      let response = await fetch("http://localhost:5000/api/getBuildings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setBuildings([...response]);
    };
    loadBuildings();
  }, []);

  return (
    <div className="m-5 text-primary fw-bold">
      {id}'s Buildings
      <div className="container">
        {buildings.length > 0 ? (
          buildings
            .filter((item) => item.company === id)
            .map((filterItems) => {
              return (
                <div key={filterItems._id}>
                  <BuildingCard
                    buildingProps={[filterItems.company, filterItems.building]}
                  />
                </div>
              );
            })
        ) : (
          <div>......</div>
        )}
      </div>
    </div>
  );
}
