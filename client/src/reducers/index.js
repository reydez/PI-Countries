import { GET_COUNTRIES, GET_COUNTRY_DETAILS } from "../types";

const initialState = {
  countries: [],
  country: {},
  loading: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case GET_COUNTRY_DETAILS:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
