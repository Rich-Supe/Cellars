'use strict';
module.exports = async (sequelize, DataTypes) => {
  const Cellar = await sequelize.define('Cellar', {
    name: DataTypes.STRING,
    wineId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Cellar.associate = function(models) {
    // associations can be defined here
    // Cellar.hasMany( models.Wine, foreignKey: 'wineId')
    // Cellar.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true})
  };
  return Cellar;
};