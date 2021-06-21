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
          { userId: 4, wineId: 1, review:"This Cabernet has an amazing finish and texture, I would definitely recommend!"},
          { userId: 4, wineId: 1, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 1, review:"I'll try to keep this short. Taste: 10/10. Finish: 8/10. The color is beautiful, aroma like spring, and a deep red color throughout."},
          { userId: 4, wineId: 1, review:"Something about this cab reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 1, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 2, review:"I'll try to keep this short. Taste: 10/10. Finish: 8/10. The color is beautiful, aroma like spring, and a deep red color throughout."},
          { userId: 4, wineId: 2, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 2, review:"This Cabernet has an amazing finish and texture, I would definitely recommend!"},
          { userId: 4, wineId: 2, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 2, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 2, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 3, review:"This wine is definitely one of my favorites, I'd recommend it every time!"},
          { userId: 4, wineId: 3, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 3, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 3, review:"The kind of wine your pair with a steak for a great dinner!"},
          { userId: 4, wineId: 3, review:"Not sure how I feel about it after the first glass, I'll get back after I finish the bottle"},
          { userId: 4, wineId: 4, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 4, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 4, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 4, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 4, review:"Something about this char reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 5, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 5, review:"This wine is definitely one of my favorites, I'd recommend it every time!"},
          { userId: 4, wineId: 5, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 5, review:"Love this Wine!"},
          { userId: 4, wineId: 5, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 6, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 6, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 6, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 6, review:"Something about this char reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 6, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 7, review:"This Cabernet has an amazing finish and texture, I would definitely recommend!"},
          { userId: 4, wineId: 7, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 7, review:"I'll try to keep this short. Taste: 10/10. Finish: 8/10. The color is beautiful, aroma like spring, and a deep red color throughout."},
          { userId: 4, wineId: 7, review:"Something about this cab reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 7, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 8, review:"I'll try to keep this short. Taste: 10/10. Finish: 8/10. The color is beautiful, aroma like spring, and a deep red color throughout."},
          { userId: 4, wineId: 8, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 8, review:"This Cabernet has an amazing finish and texture, I would definitely recommend!"},
          { userId: 4, wineId: 8, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 8, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 8, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 9, review:"This wine is definitely one of my favorites, I'd recommend it every time!"},
          { userId: 4, wineId: 9, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 9, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 9, review:"The kind of wine your pair with a steak for a great dinner!"},
          { userId: 4, wineId: 9, review:"Not sure how I feel about it after the first glass, I'll get back after I finish the bottle"},
          { userId: 4, wineId: 10, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 10, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 10, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 10, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 10, review:"Something about this char reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 11, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 11, review:"This wine is definitely one of my favorites, I'd recommend it every time!"},
          { userId: 4, wineId: 11, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 11, review:"Love this Wine!"},
          { userId: 4, wineId: 11, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 12, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 12, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 12, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 12, review:"Something about this char reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 12, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 13, review:"This Cabernet has an amazing finish and texture, I would definitely recommend!"},
          { userId: 4, wineId: 13, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 13, review:"I'll try to keep this short. Taste: 10/10. Finish: 8/10. The color is beautiful, aroma like spring, and a deep red color throughout."},
          { userId: 4, wineId: 13, review:"Something about this cab reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 13, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 14, review:"I'll try to keep this short. Taste: 10/10. Finish: 8/10. The color is beautiful, aroma like spring, and a deep red color throughout."},
          { userId: 4, wineId: 14, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 14, review:"This Cabernet has an amazing finish and texture, I would definitely recommend!"},
          { userId: 4, wineId: 14, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 14, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 14, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 15, review:"This wine is definitely one of my favorites, I'd recommend it every time!"},
          { userId: 4, wineId: 15, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 15, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 15, review:"The kind of wine your pair with a steak for a great dinner!"},
          { userId: 4, wineId: 15, review:"Not sure how I feel about it after the first glass, I'll get back after I finish the bottle"},
          { userId: 4, wineId: 16, review:"I'm usually not a fan of red wines, but I have to admit this one leaves me wanting more."},
          { userId: 4, wineId: 16, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 16, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 16, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 16, review:"Something about this char reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 17, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 17, review:"This wine is definitely one of my favorites, I'd recommend it every time!"},
          { userId: 4, wineId: 17, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
          { userId: 4, wineId: 17, review:"Love this Wine!"},
          { userId: 4, wineId: 17, review:"Meh... in the sense that this is A-M-E-H-Z-I-N-G!"},
          { userId: 4, wineId: 18, review:"Taste was acceptable, I've had better, and i've definitely had worse.."},
          { userId: 4, wineId: 18, review:"This wine is one of my personal favorites. Everything about it is stunning. The taste, odor, color.... made to perfection! Anyone that is on the fence about this one... Jump! You won't regret it!"},
          { userId: 4, wineId: 18, review:"This wine has everything that you could want, great flavor, texture, and color!"},
          { userId: 4, wineId: 18, review:"Something about this char reminds me of when I was younger. A time when things were simpler.. Taste is great!"},
          { userId: 4, wineId: 18, review:"I wish that I had a bigger glass. I feel guilty pouring over and over again, and this wine is to blame!"},
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
