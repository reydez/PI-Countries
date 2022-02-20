import React from "react";
import "./countryCard.css";
import { Link } from "react-router-dom";

const CountryCard = ({ ID, name, flag, continent }) => {
  return (
    <div className="card card-shadow">
      <div className="card-header card-image">
        <img src={flag} alt="Bandera de pais" />
      </div>

      <div className="card-body">
        <h6>Nombre: {name}</h6>
        <h6>Continent: {continent}</h6>
      </div>

      <div className="card-footer">
        <Link to={`/country/${ID}`}>
          <button className="btn">Detalles de País</button>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
