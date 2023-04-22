'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuario.belongsToMany(models.actividad, {through: 'reserva_actividad'})
      usuario.belongsToMany(models.libro, { through: 'reserva_libro' });
    }
  }
  usuario.init({
    email: DataTypes.STRING,
    nombre_usuario: DataTypes.STRING,
    rol: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};