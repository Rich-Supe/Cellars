'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        indexed: true,
        allowNull: false,
        type: Sequelize.STRING(250),
        unique: true
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATE,
        // type: Sequelize.DATE,
      },
      profileImgUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};