'use strict';
module.exports = async (sequelize, DataTypes) => {
  const Reviews = await sequelize.define('Reviews', {
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Wine, {foreignKey: 'wineId'});
  };
  return Reviews;
};