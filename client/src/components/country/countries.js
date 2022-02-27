import React from "react";
import { connect } from "react-redux";
import { getCountries } from "../../actions/index";
import CountryCard from "./countryCard";
import "./countries.css";
import Nav from "../nav/nav";

class Countries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paginaActual: 1,
      itemsPorPagina: 10,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ paginaActual: Number(event.target.id) });
  }

  componentDidMount() {
    this.props.getCountries();
  }

  render() {
    const { countries } = this.props;
    var paginas = [];

    for (
      var i = 1;
      i <= Math.ceil(countries.length / this.state.itemsPorPagina);
      i++
    ) {
      paginas.push(i);
    }

    if (this.state.paginaActual === 1) {
      this.state.itemsPorPagina = 9;
    } else {
      this.state.itemsPorPagina = 10;
    }

    const indiceDelUltimoItem =
      this.state.paginaActual * this.state.itemsPorPagina;

    const indiceDelPrimerItem = indiceDelUltimoItem - this.state.itemsPorPagina;

    const itemsActuales = countries.slice(
      indiceDelPrimerItem,
      indiceDelUltimoItem
    );

    return (
      <div>
        <Nav />
        <div className="pageNumbers">
          {paginas.map((pagina) => {
            return (
              <button key={pagina} id={pagina} onClick={this.handleClick}>
                {pagina}
              </button>
            );
          })}
        </div>

        <div className="gridLayout">
          {itemsActuales.map((country) => {
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
