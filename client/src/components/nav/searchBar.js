import React from "react";
import { connect } from "react-redux";
import { filtrarContinente, getCountries, sort } from "../../actions";
import "./searchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      continente: "Todos",
      ordenar: "Todos",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.buscarPais = this.buscarPais.bind(this);
    this.filtrarPorContinente = this.filtrarPorContinente.bind(this);
    this.filtrarAlfAsc = this.filtrarAlfAsc.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  buscarPais() {
    this.props.getCountries(this.state.nombre);
  }

  filtrarPorContinente() {
    this.props.filtrarContinente(this.state.continente);
  }

  filtrarAlfAsc() {}

  render() {
    const optionsContinents = [
      "Todos",
      "Asia",
      "Oceania",
      "North America",
      "Africa",
      "Europe",
      "Antarctica",
      "South America",
    ];

    const optionsAlfAsc = [
      "Todos",
      "AZ",
      "ZA",
      "PopulacionAsc",
      "PopulacionDesc",
    ];

    return (
      <div className="navSearchBarContainer">
        <input
          type="search"
          name="nombre"
          placeholder="Ingrese nombre de país"
          value={this.state.paisNombre}
          onChange={this.handleInputChange}
        />
        <button type="submit" onClick={this.buscarPais}>
          Buscar
        </button>
        <div className="porContinente">
          <select
            name="continente"
            id="continente"
            value={this.state.continente}
            onChange={this.handleInputChange}
          >
            {optionsContinents.map((continent) => {
              return (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              );
            })}
          </select>
          <button type="submit" onClick={this.filtrarPorContinente}>
            filtrar
          </button>
        </div>
        <div className="sorting">
          <select
            name="ordenar"
            id="ordenar"
            value={this.state.ordenar}
            onChange={this.handleInputChange}
          >
            {optionsAlfAsc.map((optionSlfAsc) => {
              return (
                <option key={optionSlfAsc} value={optionSlfAsc}>
                  {optionSlfAsc}
                </option>
              );
            })}
          </select>
          <button type="submit" onClick={this.filtrarAlfAsc}>
            Ordenar
          </button>
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
  return {
    getCountries: (pais) => dispatch(getCountries(pais)),
    filtrarContinente: (continent) => dispatch(filtrarContinente(continent)),
    sort: (valor) => dispatch(sort(valor)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
