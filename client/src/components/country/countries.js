import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../actions/index";
import CountryCard from "./countryCard";
import "./countries.css";

class Countries extends React.Component {
  componentDidMount() {
    this.props.getCountries();
  }

  render() {
    const { countries } = this.props;
    console.log(countries);

    return (
      <div className="gridLayout">
        {countries.map((country) => {
          return (
            <CountryCard
              key={country.ID}
              name={country.name}
              flag={country.flag}
              continent={country.continent}
              capital={country.capital}
              subregion={country.subregion}
              area={country.area}
              population={country.population}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return { getCountries: () => dispatch(getCountries()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
