'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return await queryInterface.bulkInsert('Reviews', [
          { userId: 1, wineId: 1, review:"This is a review"},
          { userId: 1, wineId: 1, review:"This is a review"},
          { userId: 1, wineId: 1, review:"This is a review"},
          { userId: 1, wineId: 1, review:"This is a review"},
          { userId: 1, wineId: 1, review:"This is a review"},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
