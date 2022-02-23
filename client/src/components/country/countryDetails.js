import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "./countryDetails.css";
import { getCountryDetails } from "../../actions";

const CountryDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountryDetails(id));
  }, []);

  return (
    <div className="detailsContainer">
      <div className="details details-shadow">
        <div className="details-header details-image">
          <img src={countryDetail.flag} alt="Bandera de pais" />
        </div>
        <div className="details-container">
          <div className="details-body">
            <h5>DETALLES DE PAÍS</h5>
            <h6>Codigo de pais: {countryDetail.ID}</h6>
            <h6>Nombre: {countryDetail.name}</h6>
            <h6>Continente: {countryDetail.continent}</h6>
            <h6>Capital: {countryDetail.capital}</h6>
            <h6>Subregion: {countryDetail.subregion}</h6>
            <h6>Areá: {countryDetail.area * 100 + " km²"}</h6>
            <h6>Populación: {countryDetail.population}</h6>
          </div>
          <div className="actividades">
            <h5>ACTIVIDADES DE PAÍS</h5>
            {countryDetail.activities?.length > 0 ? (
              countryDetail.activities.map((activity) => {
                return (
                  <h6>
                    Nombre: {activity.nombre}, Duración: {activity.duracion},
                    Dificultad: {activity.dificultad}, Temporada:{" "}
                    {activity.temporada}
                  </h6>
                );
              })
            ) : (
              <h6>El país no tiene actividades</h6>
            )}
          </div>
        </div>

        <div className="details-footer">
          <Link to="/countries">
            <button className="details-btn">Regresar a Paises</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
