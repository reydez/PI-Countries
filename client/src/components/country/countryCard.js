import React from "react";
import "./countryCard.css";

const CountryCard = ({
  name,
  flag,
  continent,
  capital,
  subregion,
  area,
  population,
}) => {
  return (
    <div className="cardContainer">
      <div className="countryDataContainer">
        <img src={flag} alt="Bandera de pais" className="" />
        <span>{name}</span>
        <span>{continent}</span>
        <span>{capital}</span>
        <span>{subregion}</span>
        <span>{area}</span>
        <span>{population}</span>
      </div>
    </div>
  );
};

export default CountryCard;
