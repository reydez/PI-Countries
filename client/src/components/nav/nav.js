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
      <div>
        {/* Botones/Opciones para filtrar por continente y por tipo de actividad
        turística */}
      </div>
      <div>
        {/* Botones/Opciones para ordenar tanto ascendentemente como
        descendentemente los países por orden alfabético y por cantidad de
        población */}
      </div>
      {/* Paginado para ir buscando y mostrando los siguientes paises, 10 paises por
      pagina, mostrando los primeros 9 en la primer pagina. */}
      <div className="agregarActividades">
        <Link to="/activity">
          <button type="submit">Registrar Actividades</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
