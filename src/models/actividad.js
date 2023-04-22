'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario'); // Importar el modelo Reserva
module.exports = (sequelize, DataTypes) => {
  class actividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     actividad.belongsToMany(models.usuario, {through: 'reserva_actividad'})
    }
  }
  actividad.init({
    nombre: DataTypes.STRING,
    aforo: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'actividad',
  });
  return actividad;
};