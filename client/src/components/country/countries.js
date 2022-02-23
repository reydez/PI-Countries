import React from "react";
import { connect } from "react-redux";
import { getCountries } from "../../actions/index";
import CountryCard from "./countryCard";
import "./countries.css";
import Nav from "../nav/nav";

class Countries extends React.Component {
  componentDidMount() {
    this.props.getCountries();
  }

  render() {
    const { countries } = this.props;

    return (
      <div>
        <Nav />
        <div className="gridLayout">
          {countries.map((country) => {
            return (
              <CountryCard
                key={country.ID}
                ID={country.ID}
                name={country.name}
                flag={country.flag}
                continent={country.continent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

function mapDispatchToProps(dispatch) {
  return { getCountries: () => dispatch(getCountries()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
