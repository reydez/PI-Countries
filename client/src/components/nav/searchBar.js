import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../actions";
import "./searchBar.css";

const SearchBar = () => {
  const [paisNombre, setPaisNombre] = useState("");
  const dispatch = useDispatch();

  const buscarPais = () => {
    dispatch(getCountries(paisNombre));
  };

  return (
    <div className="navSearchBarContainer">
      <input
        type="search"
        value={paisNombre}
        onChange={(e) => setPaisNombre(e.target.value)}
        placeholder="Ingrese nombre de país"
      />
      <button type="submit" onClick={buscarPais}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
