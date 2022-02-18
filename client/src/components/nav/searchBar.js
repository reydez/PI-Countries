import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <input type="search" placeholder="Nombre de pais" />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
