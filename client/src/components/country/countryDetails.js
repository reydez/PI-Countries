import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  let { id } = useParams();

  return <div>Country Details {id}</div>;
};

export default CountryDetails;
