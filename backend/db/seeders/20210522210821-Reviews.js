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
          { userId: 1, wineId: 1, review:"This Cabernet has an amazing finish and texture, I would definitely recommend!"},
          { userId: 2, wineId: 1, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 3, wineId: 1, review:"I'll try to keep this short. Taste: 10/10. Finish: 8/10. The color is beautiful, aroma like spring, and a deep red color throughout."},
          { userId: 1, wineId: 1, review:"Something about this cab reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 2, wineId: 1, review:"I thought I would enjoy this more, but it is just okay."},
          { userId: 3, wineId: 2, review:"I'll try to keep this short. Taste: 10/10. Finish: 8/10. The color is beautiful, aroma like spring, and a deep red color throughout."},
          { userId: 1, wineId: 2, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 1, wineId: 2, review:"This Cabernet has an amazing finish and texture, I would definitely recommend!"},
          { userId: 1, wineId: 2, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 1, wineId: 2, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 1, wineId: 2, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
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
