'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class editorial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      editorial.hasMany(models.libro);
    }
  }
  editorial.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'editorial',
  });
  return editorial;
};