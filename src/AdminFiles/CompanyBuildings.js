import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div className="m-5 text-danger">
      {id}'s Buildings
      <div className="container">
        {buildings.length > 0 ? (
          buildings.map((data) => {
            return <div key={data._id}>{data.building}</div>;
          })
        ) : (
          <div>......</div>
        )}
      </div>
    </div>
  );
}
