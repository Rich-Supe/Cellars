const express = require('express');
const asyncHandler = require('express-async-handler');

// const { requireAuth, restoreUser } = require('../../utils/auth');
const { Wine, Entry } = require('../../db/models');
const {Op} = require('sequelize');

const router = express.Router();

// create Entry:
router.post(
    '/',
    asyncHandler(async(req, res) => {
        const wine = await Wine.findOne({where: {name: req.body.wineName}});
        const { rating, entry, userId } = req.body;
        const newEntry = await Entry.create({rating, entry, userId, wineId: wine.id })
        return res.json(newEntry)
    })
    )
    // edit entry:
    router.put(
        '/edit/:id(\\d+)',
        asyncHandler(async(req, res) => {
            console.log('=====================================================')
            const wine = await Wine.findOne({where: {name: req.body.wineName}});
            console.log(`VINO+++++++++++++++++++++++++++++++++++++ EDIT`, wine)
            const patch = req.body
            const userId = parseInt(req.params.id, 10);
            console.log(`------------------USERID:`, userId)
            // const entryId = req.body.id
            // const entryId = req.params
            const entry = await Entry.findOne({where: {userId, wineId: wine.id}})
            entry.update(patch)
        })
    )
    
// get entries:
//single entry by wineId and userId
router.post(
    '/:id(\\d+)',
    asyncHandler(async(req, res) => {
        const userId = req.params;
        const wineId = req.body;
        // const resu = [userId, wineId]
        // const entry = Entry.findAll( {where: {[Op.and]: resu}})
        // const entry = Entry.findAll({
        //     attributes: resu
        // })
        const entry = await Entry.findAll({
            where: {
                userId,
                wineId
            }
        })
        return res.json(entry)
    })
)
// all entries by userId
router.get(
    '/:id(\\d+)',
    asyncHandler(async(req, res) => {
        const userId = parseInt(req.params.id, 10);
        const entries = await Entry.findAll({where: {userId}, include: {model: Wine}})
        return res.json(entries)
    })
)


// delete entry:

router.post(
    '/delete/:id(\\d+)',
    asyncHandler(async(req, res) => {
        const userId = parseInt(req.params.id, 10);
        // console.log(`----------------------------`, userId, req.body.wineName)
        const wine = await Wine.findOne({where: {name: req.body.wineName}});
            // console.log(`VINO+++++++++++++++++++++++++++++++++++++ DELETE`, wine.id)
        await Entry.destroy({
            where: {
                userId, 
                wineId: wine.id
            }
        })
    })
)

//Delete all entries;
router.delete(
    './:id(\\d+)',
    asyncHandler(async(req, res) => {
        const userId = req.params;
        //Or TRUNCATE?
        await Entry.destroyAll({
            where: {
                userId 
            }
        })
    })
)



module.exports = router;