'use strict';
module.exports = async (sequelize, DataTypes) => {
  const Review = await sequelize.define('Review', {
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Wine, {foreignKey: 'wineId'});
  };
  return Review;
};