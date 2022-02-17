import { GET_COUNTRIES } from "../types";

const initialState = {
  countries: [],
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
    default:
      return state;
  }
}

export default rootReducer;
