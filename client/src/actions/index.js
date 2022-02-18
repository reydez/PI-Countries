import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAILS,
  GET_COUNTRY_DETAILS_ERROR,
  COUNTRIES_ERROR,
} from "../types";
import axios from "axios";

export function getCountries() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/countries")
      .then((response) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: COUNTRIES_ERROR,
          payload: console.log(error),
        });
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
        dispatch({
          type: GET_COUNTRY_DETAILS_ERROR,
          payload: console.log(error),
        });
      });
  };
}
