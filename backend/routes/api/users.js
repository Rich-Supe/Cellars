const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Wine, Cellar, Review, Crate } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');
// const { singlePrivateFileUpload } = require('../../awsS3');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

// Sign up
router.post(
    '/',
    singleMulterUpload("image"),
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username, name, birthday } = req.body;
      const profileImageUrl = await singlePublicFileUpload(req.file);
      const user = await User.signup({ email, username, password, name, birthday, profileImageUrl });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );


// Cellars routes

router.get(
    '/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const userCellar = await Cellar.findAll({where:{userId: id}, include: [{model:Wine, include:Review}]})
        res.json({userCellar})
    })
);

//Add to user

router.post(
    '/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        const {wineId} = req.body;
        const userId = req.params.id
        await Crate.create({
            cellarId: userId,
            wineId
        })
        res.json({"key" : "wine added"});
    })
)

router.post(
    '/delete/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        console.log('----------------------------------------------------')
        const {wineId} = req.body;
        const userId = req.params.id
        console.log("===============------=============-------====", wineId, userId)
        const crate = await Crate.findOne({where: {
            cellarId: userId,
            wineId
    }})
        console.log('----------------', crate)
        await Crate.destroy({
            where: {
                cellarId: userId,
                wineId
        }
        })
        const userCellar = await Cellar.findAll({where:{userId: userId}, include: [{model:Wine, include:Review}]})
        res.json({userCellar})
    })
)





module.exports = router;