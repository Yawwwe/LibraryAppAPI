'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      imagen.belongsTo(models.libro);
    }
  }
  imagen.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'imagen',
  });
  return imagen;
};