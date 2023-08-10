import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BuildingCard from "./BuildingCard";
import { Button } from "react-bootstrap";

export default function CompanyBuildings() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [buildings, setBuildings] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

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
      <div>
        <Button className="btn btn-danger ms-3" onClick={goBack} role="button">
          Back
        </Button>
      </div>
      <div className="fs-3 text-primary">{id}'s Buildings</div>
      <div className="container">
        {buildings.length > 0 ? (
          buildings
            .filter((item) => item.company === id)
            .map((filterItems) => {
              return (
                <div key={filterItems._id}>
                  <BuildingCard {...filterItems} />
                </div>
              );
            })
        ) : (
          <div>No buildings added</div>
        )}
      </div>
    </div>
  );
}
