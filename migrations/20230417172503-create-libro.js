'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('libros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ISBN: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      generoId: {
        type: Sequelize.INTEGER
      },
      autorId: {
        type: Sequelize.INTEGER
      },
      editorialId: {
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.STRING
      },
      fecha_entrada: {
        type: Sequelize.DATE
      },
      fecha_publicacion: {
        type: Sequelize.DATE
      },
      stock_total: {
        type: Sequelize.INTEGER
      },
      stock_disponible: {
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('libros');
  }
};