const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Wine, Cellar, Review } = require('../../db/models');

const {Op} = require('sequelize');
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

router.get(
    '/search/:name',
    asyncHandler(async (req, res) => {
        //Added trim to remove whitespace
        const name = req.params.name.trim()
        // console.log(`--------------------------------NAME from api GET route by name:`, name)
        const wines = await Wine.findAll({where: {name: { [Op.iLike]: `%` + name + `%` }}})
        // console.log(`--------------------------------WINES from api GET route by name:`, wines)
        return res.json(wines)
    })
)

// Grab Wines by search 
router.post(
    // '/search/:searchCriteria/:selectedChoice',
    '/search/:searchData',
    asyncHandler(async (req, res) => {
        // const searchCriteria = req.params.searchCriteria;
        // const selectedChoice = req.params.searchChoice;
        const {color, grape, country, year, name} = req.body
        // let results;
        // console.log('----------------', searchData)
        let results = [];
        if (color) results.push({color});
        if (grape) results.push({grape});
        if (country) results.push({country});
        if (year) results.push({year});
        if (name) results.push({name});
        const wines = await Wine.findAll({where: {[Op.and]:results}})

        return res.json(wines)


        // if (searchData.color) {
        //     let color = await Wine.findAll({where: {color: selectedChoice}});
        //     results.push(...color)
        // }

        // if (searchData.grape) {
        //     let grape = await Wine.findAll({where: {grape: selectedChoice}});
        //     results.push(...grape)
        // }

        // if (searchData.country) {
        //     let grape = await Wine.findAll({where: {country: selectedChoice}});
        //     results.push(...grape)
        // }

        // if (searchData.year) {
        //     let grape = await Wine.findAll({where: {grape: selectedChoice}});
        //     results.push(...grape)
        // }

        // if (searchData.name) {
        //     let grape = await Wine.findAll({where: {grape: selectedChoice}});
        //     results.push(...grape)
        // }

        // switch (searchData) {
        //     case searchData.color.length > 1:
        //         results.push(await Wine.findAll({where: {color: selectedChoice}}));
        //         break;
        //     case searchData.grape.length > 1:
        //         results.push(await Wine.findAll({where: {grape: selectedChoice}}));
        //         break;
        //     case searchData.country.length > 1:
        //         results.push(await Wine.findAll({where: {country: selectedChoice}}));
        //         break;
        //     case searchData.year.length > 1:
        //         results.push(await Wine.findAll({where: {year: selectedChoice}}));
        //         break;
        //     case searchData.country.length > 1:
        //         results.push(await Wine.findAll({where: {country: selectedChoice}}));
        //         break;
        //     default:
        //         results = await Wine.findAll();
        // }

        // switch (searchCriteria) {
        //     case 'color':
        //         results = await Wine.findAll({where: {color: selectedChoice}});
        //         break;
        //     case 'grape':
        //         results = await Wine.findAll({where: {grape: selectedChoice}});
        //         break;
        //     case 'country':
        //         results = await Wine.findAll({where: {country: selectedChoice}});
        //         break;
        //     case 'year':
        //         results = await Wine.findAll({where: {year: selectedChoice}});
        //         break;
        //     case 'name':
        //         results = await Wine.findAll({where: {country: selectedChoice}});
        //         break;
        //     case 'default':
        //         results = await Wine.findAll();
        // }
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