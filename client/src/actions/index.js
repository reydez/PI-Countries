import { GET_COUNTRIES, GET_COUNTRY_DETAILS, ADD_ACTIVITY } from "../types";

import axios from "axios";

export function getCountries(name = null) {
  return function (dispatch) {
    if (name === null) {
      return axios
        .get("http://localhost:3001/countries")
        .then((response) => {
          dispatch({
            type: GET_COUNTRIES,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return axios
      .get("http://localhost:3001/countries?name=" + name)
      .then((response) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        alert("pais no encontrado");
      });
  };
}

export function getCountryDetails(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        dispatch({
          type: GET_COUNTRY_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function addActivity(body) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3001/activity", body)
      .then((response) => {
        dispatch({
          type: ADD_ACTIVITY,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
