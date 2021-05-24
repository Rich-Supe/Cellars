const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { User, Wine, Cellar, Review } = require('../../db/models');
// const { Crate } = require('../../db/models');


const router = express.Router();


// Wine page routes

// Grab all wines
router.get(
    '/',
    // requireAuth,
    asyncHandler(async(req, res) => {
        const wines = await Wine.findAll();
        //After implementing Crates, to access those wines, Crates may need another path
        // let currUser = req.session.auth.userId;
        // const winesInCrate = await Crate.findAll({where:{userId:currUser}});
        // let crate = {}
        // winesInCrate.forEach(wine => {
        //     crate[wine.id]=wine.dataValues
        // });
        return res.json(wines)
    })

)

// Grab Wines by search  (need to fix-up)
// router.get('/search/:searchCriteria/:selectedChoice', async (req, res, next) => {
//     const searchCriteria = req.params.searchCriteria;
//     const selectedChoice = req.params.selectedChoice;
//     let results;
    
//     switch (searchCriteria) {
//         case 'title':
//             results = await Comic.findAll({where: {title: selectedChoice}});
//             break;
//         case 'author':
//             results = await Comic.findAll({where: {author: selectedChoice}});
//             break;
//         case 'genre':
//             results = await Comic.findAll({where: {genre: selectedChoice}});
//             break;
//         case 'keyword':
//             results = await Comic.findAll({where: {title: { [Op.iLike]: `%${selectedChoice}%`}}});
//             let results2 = await Comic.findAll({where: {author: { [Op.iLike]: `%${selectedChoice}%`}}});
//             let results3 = await Comic.findAll({where: {genre: { [Op.iLike]: `%${selectedChoice}%`}}});
//             results2.forEach(result => results.push(result));
//             results3.forEach(result => results.push(result));
//             break;
//     }
//     console.log(`*************************************${results}`)
//     res.render('results', {results});
//   });


//Individual Wine route, including Reviews on the wine. 
router.get(
    // '/fud',
    '/:id(\\d+)',
    asyncHandler(async(req, res) => {
        const wineId = parseInt(req.params.id, 10);
        const reviews = await Review.findAll( {where:{ wineId }})
        const wine = await Wine.findByPk(wineId);
        console.log(reviews)
        //After implementing Crates, to access those wines Crates may need another path
        // let currUser = req.session.auth.userId;
        // const winesInCrate = await Crate.findAll({where:{userId:currUser}});
        // let crate = {}
        // winesInCrate.forEach(wine => {
        //     crate[wine.id]=wine.dataValues
        // });
        return res.json({wine, reviews})
    })
)

// More Review routes, require auth for these!


// Create reviews


// Edit reviews


// Delete reviews









module.exports = router;