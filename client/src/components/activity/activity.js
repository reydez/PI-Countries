import React from "react";
import { connect } from "react-redux";
import { addActivity, getCountries } from "../../actions/index";
import { Link } from "react-router-dom";
import "./activity.css";

class Activity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      dificultad: "1",
      duracion: "",
      temporada: "verano",
      pais: "",
      paises: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.agregarPais = this.agregarPais.bind(this);
    this.quitarPais = this.quitarPais.bind(this);
    this.setResetState = this.setResetState.bind(this);
    this.buscarPais = this.buscarPais.bind(this);
    this.nadamasNumeros = this.nadamasNumeros.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  nadamasNumeros(event) {
    if (/\D/g.test(event.target.value)) {
      event.target.value = event.target.value.replace(/\D/g, "");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.nombre !== "" &&
      this.state.duracion !== "" &&
      this.state.paises.length !== 0
    ) {
      this.props.addActivity({
        nombre: this.state.nombre,
        dificultad: this.state.dificultad,
        duracion: this.state.duracion,
        temporada: this.state.temporada,
        paises: this.state.paises,
      });
      this.setResetState();
      alert("Se registro exitosamente");
      return;
    }
    alert("Algunos campos son necesarios para registrar actividad");
  }

  agregarPais(pais) {
    var found = this.state.paises.find((ele) => ele.ID === pais.ID);
    if (!found) {
      this.setState({ paises: [...this.state.paises, pais] });
    }
  }

  quitarPais(ID) {
    this.setState({
      paises: this.state.paises.filter((pais) => pais.ID !== ID),
    });
  }

  setResetState() {
    this.setState({
      nombre: "",
      dificultad: "1",
      duracion: "",
      temporada: "verano",
      pais: "",
      paises: [],
    });
  }

  componentDidMount() {
    this.props.getCountries();
  }

  buscarPais() {
    this.props.getCountries(this.state.pais);
  }

  render() {
    const { countries } = this.props;

    return (
      <div className="activity activity-shadow">
        <div className="backButton">
          <Link to="/countries">
            <button type="submit">Regresar a paises</button>
          </Link>
        </div>
        <div className="activityFormContainer">
          <h1 className="formTitle">Registrar Actividades</h1>
          <form action="post" onSubmit={this.handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input
              className="inputText"
              type="text"
              name="nombre"
              id="nombre"
              value={this.state.nombre}
              onChange={this.handleInputChange}
              placeholder="Ingresar nombre"
            />

            <label htmlFor="dificultad">Dificultad</label>
            <select
              name="dificultad"
              id="dificultad"
              value={this.state.dificultad}
              onChange={this.handleInputChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <label htmlFor="duracion">Duración</label>
            <input
              className="inputText"
              type="text"
              name="duracion"
              id="duracion"
              value={this.state.duracion}
              onChange={this.handleInputChange}
              onKeyUp={this.nadamasNumeros}
              placeholder="Ingresar duración"
            />

            <label htmlFor="temporada">Temporada</label>
            <select
              name="temporada"
              id="temporada"
              value={this.state.temporada}
              onChange={this.handleInputChange}
            >
              <option value="verano">verano</option>
              <option value="otono">otoño</option>
              <option value="invierno">invierno</option>
              <option value="primavera">primavera</option>
            </select>
            <button type="submit">Registrar</button>
          </form>
        </div>
        <div className="countrySelection">
          <div className="searchBarContainer">
            <input
              type="text"
              name="pais"
              id="pais"
              value={this.state.pais}
              onChange={this.handleInputChange}
              placeholder="Ingresar nombre de pais"
            />
            <button onClick={this.buscarPais}>Buscar</button>
          </div>
          <div className="countryListContainer">
            <div className="addActionContainer">
              <h6 className="title1">Paises</h6>
              <ul>
                {countries.map((country) => {
                  return (
                    <li key={country.ID}>
                      <span>{country.name}</span>
                      <button onClick={() => this.agregarPais(country)}>
                        agregar
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="addedCountriesContainer">
              <h6 className="title2">Paises agregados</h6>
              <ul>
                {this.state.paises.length > 0 ? (
                  this.state.paises?.map((pais) => {
                    return (
                      <li key={pais.ID}>
                        <span>{pais.name}</span>{" "}
                        <button onClick={() => this.quitarPais(pais.ID)}>
                          quitar
                        </button>
                      </li>
                    );
                  })
                ) : (
                  <li>
                    <span>No existen paises agregados</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
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
    addActivity: (body) => dispatch(addActivity(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
