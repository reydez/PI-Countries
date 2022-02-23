import { GET_COUNTRIES, GET_COUNTRY_DETAILS, ADD_ACTIVITY } from "../types";

const initialState = {
  countries: [],
  country: {},
  activity: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_DETAILS:
      return {
        ...state,
        country: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
