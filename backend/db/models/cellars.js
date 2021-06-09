'use strict';
module.exports =  (sequelize, DataTypes) => {
  const Cellar =  sequelize.define('Cellar', {
    // name: DataTypes.STRING,
    // wineId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Cellar.associate = function(models) {
    const columnMapping = {
        through: 'Crate',
        foreignKey: 'cellarId',
        otherKey: "wineId"
    }

    Cellar.belongsToMany( models.Wine, columnMapping)
    Cellar.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true})
  };
  return Cellar;
};