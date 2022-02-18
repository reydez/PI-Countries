import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logoHenry.png";
import "./nav.css";
import SearchBar from "./searchBar";

const Nav = () => {
  return (
    <div className="navContainer">
      <div className="logoHenry">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default Nav;
