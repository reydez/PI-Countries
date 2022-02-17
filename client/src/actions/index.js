import { GET_COUNTRIES, COUNTRIES_ERROR } from "../types";
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
