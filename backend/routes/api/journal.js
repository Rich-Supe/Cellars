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
        const entry = await Entry.create(req.body)
        return res.json(entry)
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
        const entry = Entry.findAll({
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
        const userId = req.params;
        const entries = Entry.findAll({where: {userId}})
        
        return res.json(entries)
    })
)

// edit entry:
router.put(
    '/edit/:id(\\d+)',
    asyncHandler(async(req, res) => {
        const patch = req.body
        const entryId = req.body.id
        const entry = Entry.findByPk(entryId)
        entry.update(patch)
    })
)

// delete entry:

router.post(
    './:id(\\d+)',
    asyncHandler(async(req, res) => {
        const userId = req.params;
        const wineId = req.body;
        await Entry.destroy({
            where: {
                userId, 
                wineId
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