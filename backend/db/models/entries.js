'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    rating: DataTypes.INTEGER,
    entry: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER
  }, {});
  Entry.associate = function(models) {
    Entry.belongsTo(models.User, { foreignKey: 'userId' });
    Entry.belongsTo(models.Wine, { foreignKey: 'wineId'});
  };
  return Entry;
};