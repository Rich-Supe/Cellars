'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Entries', [
          { rating: 8, entry: "I'm not really sure how I feel about this one, but I'm planning on trying more!", userId: 1, wineId: 1},
          { rating: 10, entry: "I really love this wine, This is the first cab that I have enjoyed this much!", userId: 1, wineId: 2},
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Entries', null, {});
  }
};
