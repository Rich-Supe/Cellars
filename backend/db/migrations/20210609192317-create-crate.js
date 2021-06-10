'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Crates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tasted: {
        type: Sequelize.BOOLEAN
      },
      interested: {
        type: Sequelize.BOOLEAN
      },
      wineId: {
        type: Sequelize.INTEGER,
        references: { model: "Wines"}
      },
      cellarId: {
        type: Sequelize.INTEGER,
        references: { model: "Cellars"}
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Crates');
  }
};