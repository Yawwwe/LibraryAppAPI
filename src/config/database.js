const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_development', 'root', 'bibliotecajoseplanes', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;