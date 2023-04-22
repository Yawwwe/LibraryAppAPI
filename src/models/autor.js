'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //Un autor puede tener mas de un libro
    autor.hasMany(models.libro);
    }
  }
  autor.init({
    ISNI: DataTypes.STRING,
    nombre_autor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'autor',
  });
  return autor;
};