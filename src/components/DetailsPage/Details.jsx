import React from "react";
import { useParams, useLocation } from "react-router-dom";
const Details = () => {
  const { state } = useLocation();
  const { positionId } = useParams();
  const { data } = state;

  const positionItem = data.find((element) => {
    return element.id === Number(positionId);
  });
  return <div></div>;
};

export default Details;
