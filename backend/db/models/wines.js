'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wines = sequelize.define('Wines', {
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
  Wines.associate = function(models) {
    // associations can be defined here
  };
  return Wines;
};