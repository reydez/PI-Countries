import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAILS,
  ADD_ACTIVITY,
  FILTRAR_POR_CONTINENTE,
  SORT,
} from "../types";

const initialState = {
  countries: [],
  todosLosPaises: [],
  country: {},
  activity: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        todosLosPaises: action.payload,
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
    case FILTRAR_POR_CONTINENTE:
      var filteredPorCnt =
        action.payload === "Todos"
          ? state.todosLosPaises
          : state.todosLosPaises.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries: filteredPorCnt,
      };
    case SORT:
      var sorted = state.countries.sort((a, b) => {
        return a.population - b.population;
      });

      return {
        ...state,
        countries: sorted,
      };

    default:
      return state;
  }
}

export default rootReducer;
