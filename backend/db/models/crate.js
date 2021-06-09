'use strict';
module.exports = (sequelize, DataTypes) => {
  const Crate = sequelize.define('Crate', {
    tasted: DataTypes.BOOLEAN,
    interested: DataTypes.BOOLEAN,
    wineId: DataTypes.INTEGER,
    cellarId: DataTypes.INTEGER
  }, {});
  Crate.associate = function(models) {
    // associations can be defined here
  };
  return Crate;
};