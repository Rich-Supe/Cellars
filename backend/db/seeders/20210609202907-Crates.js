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

      return queryInterface.bulkInsert('Crates', [
          { tasted: true, interested: false, wineId: 1, cellarId: 1, createdAt: new Date(), updatedAt: new Date()},
          { tasted: false, interested: true, wineId: 2, cellarId: 1, createdAt: new Date(), updatedAt: new Date()},
          { tasted: false, interested: true, wineId: 3, cellarId: 1, createdAt: new Date(), updatedAt: new Date()},
          { tasted: true, interested: false, wineId: 4, cellarId: 1, createdAt: new Date(), updatedAt: new Date()},
          { tasted: true, interested: false, wineId: 5, cellarId: 1, createdAt: new Date(), updatedAt: new Date()},
          { tasted: false, interested: true, wineId: 6, cellarId: 1, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Crates', null, {});
  }
};
