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
          { userId: 1, wineId: 1, review:"This is a review 1"},
          { userId: 2, wineId: 1, review:"This is a review 2"},
          { userId: 3, wineId: 1, review:"This is a review 3"},
          { userId: 1, wineId: 1, review:"This is a review 4"},
          { userId: 2, wineId: 1, review:"This is a review 5"},
          { userId: 3, wineId: 2, review:"This is a review 1"},
          { userId: 1, wineId: 2, review:"This is a review 1"},
          { userId: 1, wineId: 2, review:"This is a review 2"},
          { userId: 1, wineId: 2, review:"This is a review 3"},
          { userId: 1, wineId: 2, review:"This is a review 4"},
          { userId: 1, wineId: 2, review:"This is a review 5"},
          { userId: 1, wineId: 3, review:"This is a review 1"},
          { userId: 1, wineId: 3, review:"This is a review 2"},
          { userId: 1, wineId: 3, review:"This is a review 3"},
          { userId: 1, wineId: 3, review:"This is a review 4"},
          { userId: 1, wineId: 3, review:"This is a review 5"},
          { userId: 1, wineId: 4, review:"This is a review 1"},
          { userId: 1, wineId: 4, review:"This is a review 2"},
          { userId: 1, wineId: 4, review:"This is a review 3"},
          { userId: 1, wineId: 4, review:"This is a review 4"},
          { userId: 1, wineId: 4, review:"This is a review 5"},
          { userId: 1, wineId: 5, review:"This is a review 1"},
          { userId: 1, wineId: 5, review:"This is a review 2"},
          { userId: 1, wineId: 5, review:"This is a review 3"},
          { userId: 1, wineId: 5, review:"This is a review 4"},
          { userId: 1, wineId: 5, review:"This is a review 5"},
          { userId: 1, wineId: 6, review:"This is a review 1"},
          { userId: 1, wineId: 6, review:"This is a review 2"},
          { userId: 1, wineId: 6, review:"This is a review 3"},
          { userId: 1, wineId: 6, review:"This is a review 4"},
          { userId: 1, wineId: 6, review:"This is a review 5"},
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
