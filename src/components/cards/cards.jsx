import React, { useState, useEffect } from "react";
import Card from "./card";
const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/`)
      .then((response) => {
        response.json().then((data) => {
          setData(() => data.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="cards-container">
      {data.map((job) => {
        const {
          company,
          logo,
          logoBackground,
          position,
          postedAt,
          contract,
          location,
        } = job;
        return (
          <Card
            details={{
              company: company,
              logo: logo,
              logoBackground: logoBackground,
              position: position,
              postedAt: postedAt,
              contract: contract,
              location: location,
            }}
            key={job.id}
          />
        );
      })}
    </div>
  );
};

export default Cards;
