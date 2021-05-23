'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define('Wine', {
    name: DataTypes.STRING,
    grape: DataTypes.STRING,
    color: DataTypes.STRING,
    year: DataTypes.INTEGER,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    labelUrl: DataTypes.STRING
  }, {});
  Wine.associate = function(models) {
    // associations can be defined here
    // const columnMapping = {
    //     through: 'Reviews',
    //     foreignKey: 'wineId',
    //     otherKey: 'userId'
    //   }
  
      const columnMapping2 = {
        through: 'Cellars',
        foreignKey: 'wineId',
        otherKey: 'shelfId'
      }

    Wine.belongsToMany(models.User, columnMapping2);
    // Wine.belongsToMany(models.Cellar, columnMapping2);
    Wine.hasMany(models.Review, { foreignKey: "wineId" });
  };
  return Wine;
};