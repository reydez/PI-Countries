import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./countryCard";

class Countries extends React.Component {
  render() {
    return (
      <div>
        Countries component
        <CountryCard />
        <Link to="/activity">agregar activities</Link>
      </div>
    );
  }
}

export default Countries;
