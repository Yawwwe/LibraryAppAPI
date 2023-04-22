'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class libro extends Model {
    static associate(models) {
      //Un libro solamente tiene un autor
      libro.belongsTo(models.autor, {
        foreignKey: {
          allowNull: false
        }
      });
    //Un libro solamente tiene un genero
      libro.belongsTo(models.genero, {
        foreignKey: {
          allowNull: false
        }
      })
      //Un libro solamente tiene una editorial
      libro.belongsTo(models.editorial, {
        foreignKey: {
          allowNull: false
        }
      });
      libro.belongsTo(models.imagen, { as: 'portada' });
      libro.belongsToMany(models.usuario, { through: 'reserva_libro' });
    }
  }
  libro.init({
    ISBN: DataTypes.INTEGER,
    generoId: DataTypes.INTEGER,
    autorId: DataTypes.INTEGER,
    editorialId: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    fecha_entrada: DataTypes.DATE,
    fecha_publicacion: DataTypes.DATE,
    stock_total: DataTypes.INTEGER,
    stock_disponible: DataTypes.INTEGER,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'libro',
  });
  return libro;
};