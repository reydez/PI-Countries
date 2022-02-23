const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      dificultad: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      },
      duracion: {
        type: DataTypes.STRING,
      },
      temporada: {
        type: DataTypes.ENUM("verano", "otono", "invierno", "primavera"),
      },
    },
    {
      timestamps: false,
    }
  );
};
