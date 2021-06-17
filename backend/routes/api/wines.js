const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
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
router.get(
    '/search/:searchCriteria/:selectedChoice',
    asyncHandler(async (req, res) => {
        const searchCriteria = req.params.searchCriteria;
        const selectedChoice = req.params.searchChoice;
        let results;

        switch (searchCriteria) {
            case 'color':
                results = await Wine.findAll({where: {color: selectedChoice}});
                break;
            case 'grape':
                results = await Wine.findAll({where: {grape: selectedChoice}});
                break;
            case 'country':
                results = await Wine.findAll({where: {country: selectedChoice}});
                break;
            case 'year':
                results = await Wine.findAll({where: {year: selectedChoice}});
                break;
            case 'name':
                results = await Wine.findAll({where: {country: selectedChoice}});
                break;
            case 'default':
                results = await Wine.findAll();
        }
        console.log(`*************************************${results}`)
        return res.json(results)
    })
)


//Individual Wine route, including Reviews on the wine. 
router.get(
    '/:id(\\d+)',
    asyncHandler(async(req, res) => {
        const wineId = parseInt(req.params.id, 10);
        const reviews = await Review.findAll( {where:{ wineId }})
        const wine = await Wine.findByPk(wineId);
        // console.log(reviews)
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

//Create Wine Route
router.post(
    '/',
    asyncHandler(async(req, res) => {
        const wine = await Wine.create(req.body)
        return res.json(wine)
    })
)

// More Review routes, require auth for these!


// Create reviews
//Can comment out app.use csurf in app.js to test
router.post(
    '/:id(\\d+)',
    restoreUser,
    // requireAuth,
    asyncHandler(async(req, res)=> {
        // need to figure out how to get the user's id
        const newReview= await Review.create(req.body)
        return res.json(newReview);
    })
)

// Edit reviews
router.put(
    '/:id(\\d+)',
    requireAuth,
    asyncHandler(async(req, res) => {
        const {review} = req.body;
        const {rating} = req.body;
        const wineId = parseInt(req.params.id, 10)
        const userId = req.session.user.id
        console.log(userId)
        // need to figure out how to get the user's id
        await Review.update({ review, rating }, {where: {wineId}})
        const currentWine = await Review.findByPk(wineId)
        return res.json(currentWine);
    })
)


// Delete reviews









module.exports = router;