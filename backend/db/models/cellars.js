'use strict';
module.exports = async (sequelize, DataTypes) => {
  const Cellars = await sequelize.define('Cellars', {
    name: DataTypes.STRING,
    wineId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Cellars.associate = function(models) {
    // associations can be defined here
    // Cellar.hasMany( models.Wine, foreignKey: 'wineId')
    // Cellar.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true})
  };
  return Cellars;
};