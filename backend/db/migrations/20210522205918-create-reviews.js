'use strict';
module.exports = {



  up:  (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      review: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      rating: {
        type: Sequelize.INTEGER
      },
      wineId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Wines"}
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
      });
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }



};