'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cellars = sequelize.define('Cellars', {
    name: DataTypes.STRING,
    wineId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Cellars.associate = function(models) {
    // associations can be defined here
  };
  return Cellars;
};