import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="navSearchBarContainer">
      <input type="search" placeholder="Ingrese nombre de país" />
      <button type="submit">Buscar</button>
    </div>
  );
};

export default SearchBar;
