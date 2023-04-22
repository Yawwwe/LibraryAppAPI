'use strict';
const {
  Model
} = require('sequelize');
const autor = require('./autor');
module.exports = (sequelize, DataTypes) => {
  class genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      genero.hasMany(models.libro)
    }
  }
  genero.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'genero',
  });
  return genero;
};