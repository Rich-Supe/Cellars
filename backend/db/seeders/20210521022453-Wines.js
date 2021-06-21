'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      return await queryInterface.bulkInsert('Wines', [
        {name:'Caymus Napa Valley Cabernet Sauvignon 2019', grape:'Cabernet Sauvignon', color:'Red', year: 2019, country:'USA', region:'Napa Valley', rating:93, price: 89.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/yhe9xk4nuajlosehcmf3.jpg'},
        {name:'Screaming Eagle Cabernet Sauvignon 2018', grape:'Cabernet Sauvignon', color:'Red', year: 2018, country:'USA', region:'Napa Valley', rating:100, price: 2799.97, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/rt7zhbxwsep1qq9c9tom.jpg'},
        {name:'Stags Leap Winery Napa Valley Cabernet Sauvignon 2017', grape:'Cabernet Sauvignon', color:'Red', year: 2017, country:'USA', region:'Napa Valley', rating:92, price: 49.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/on0hb73jdqwjmna499yh.jpg'},
        {name:'Joseph Phelps Cabernet Sauvignon 2018', grape:'Cabernet Sauvignon', color:'Red', year: 2018, country:'USA', region:'Napa Valley', rating: 94, price: 74.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/v0ar0afffkrsjdkkz3w8.jpg'},
        {name:'Heitz Cellar Napa Valley Cabernet Sauvignon 2015', grape:'Cabernet Sauvignon', color:'Red', year: 2015, country:'USA', region:'Napa Valley', rating: 95, price: 59.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/ictp3awwbnnqjafhctb6.jpg'},
        {name:'Opus One 2017', grape:'Bordeaux', color:'Red', year: 2017, country:'USA', region:'Napa Valley', rating: 95, price: 364.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/vv74mlw0vcvi4zidwdra.jpg'},
        {name:'Chateau Lynch-Bages 2019', grape:'Bordeaux', color:'Red', year: 2019, country:'France', region:'Bordeaux', rating: 98, price: 97.97, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/pr15hc4e3ojuak3e8ers.jpg'},
        {name:'Chateau Faizeau Montagne-St.-Emilion 2018', grape:'Bordeaux', color:'Red', year: 2018, country:'France', region:'Bordeaux', rating: 91, price: 19.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/hhkd4nfm4ct5xvmzupom.jpg'},
        {name:'Mer Soleil Santa Lucia Highlands Reserve Chardonnay 2019', grape:'Chardonnay', color:'White', year: 2019, country:'USA', region:'Monterey', rating: 91, price: 29.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/la04a0pi2nrhmxqtuuhn.jpg'},
        {name:'Far Niente Chardonnay 2018', grape:'Chardonnay', color:'White', year: 2018, country:'USA', region:'Napa Valley', rating: 95, price: 49.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/oauppu2prcbktqswfyzf.jpg'},
        {name:'Domaine Francois Raveneau Chablis Les Clos Grand Cru (1.5 Liter Magnum) 2017', grape:'Chardonnay', color:'White', year: 2017, country:'France', region:'Burgandy', rating: 96, price: 2779.97, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/ea67lwonnedkeynzjqkl.jpg'},
        {name:'Bogle Phantom Chardonnay 2017', grape:'Chardonnay', color:'White', year: 2017, country:'USA', region:'Yolo County', rating: 91, price: 17.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/kbt4oxt3b9xfcivddnhz.jpg'},
        {name:'Leeuwin Estate Art Series Chardonnay 2017', grape:'Chardonnay', color:'White', year: 2017, country:'Australia', region:'Western Australia', rating: 96, price: 84.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/kczelhlxwpsjrdcntpyt.jpg'},
        {name:'AERENA by Blackbird Vineyards Chardonnay 2019', grape:'Chardonnay', color:'White', year: 2019, country:'USA', region:'North Coast', rating: 90, price: 13.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/tztgbkqnbldgfc2hcwnt.jpg'},
        {name:'Three Sticks Durell Vineyard Chardonnay 2017', grape:'Chardonnay', color:'White', year: 2017, country:'USA', region:'Sonoma County', rating: 93, price: 59.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/dlumwjl4lorjqiduze4v.jpg'},
        {name:'PlumpJack Reserve Chardonnay 2018', grape:'Chardonnay', color:'White', year: 2018, country:'USA', region:'Napa Valley', rating: 89, price: 58.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/x63wi31fe8umxxqsx7cf.jpg'},
        {name:'La Crema Sonoma Coast Pinot Noir 2018', grape:'Pinot Noir', color:'Red', year: 2018, country:'USA', region:'California', rating: 90, price: 24.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/etp3smee8o1vbmg7zb3p.jpg'},
        {name:'Domaine Gros Frere et Soeur Echezeaux Grand Cru 2018', grape:'Pinot Noir', color:'Red', year: 2018, country:'France', region:'Burgundy', rating: 92, price: 199.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/obaozcrnysxk3vdnipf2.jpg'},
        {name:'Domaine Tollot-Beaut Corton Bressandes Grand Cru 2018', grape:'Pinot Noir', color:'Red', year: 2018, country:'France', region:'Burgundy', rating: 95, price: 159.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/nv9ybeaatuzdibqe4fiw.jpg'},
        {name:'Philippe Pacalet Nuits-Saint-Georges Rouge 2016', grape:'Pinot Noir', color:'Red', year: 2016, country:'France', region:'Burgundy', rating: 92, price: 124.99, labelUrl:'https://www.wine.com/product/images/w_160,h_160,c_fit,q_auto:good,fl_progressive/wgjn1kebzfijc8gcep0m.jpg'},

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Wines', null, {});
  }
};
