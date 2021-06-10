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
      const columnMapping = {
        through: 'Crate',
        foreignKey: 'wineId',
        otherKey: 'cellarId'
      }

    Wine.belongsToMany(models.Cellar, columnMapping);
    Wine.hasMany(models.Review, { foreignKey: "wineId" });
  };
  return Wine;
};