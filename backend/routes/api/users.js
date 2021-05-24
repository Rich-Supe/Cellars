const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Wine, Cellar } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

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
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username, name, birthday } = req.body;
      const user = await User.signup({ email, username, password, name, birthday });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );


// Cellars routes

router.get(
    '/user/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        const id = parseIne(req.params.id, 10);
        const userCellar = await Cellar.findAll({where:{userId: id, include: Wine}})
        res.render({userCellar})
    })
);

router.post(
    '/user/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        //if getting wine id by adding the id to the button
        const {wineButtonId} = req.body;
        const usersId = parseInt(req.params.id, 10)
        await Cellar.create({
            userId: usersId,
            //if getting wine id by adding the id to the button
            wineId: wineButtonId
        })
        res.json({"key" : "wine added"});
    })
)

router.delete(
    '/user/:id(\\d+)',
    requireAuth,
    asyncHandler(async (req, res) => {
        //if getting wine id by adding the id to the button
        const {wineButtonId} = req.body;
        const usersId = parseInt(req.params.id, 10)
        await Cellar.destroy({
            where: {
                userId: usersId,
                //if getting wine id by adding the id to the button
                wineId: wineButtonId
        }
        })
        res.json({"key" : "wine removed"})
    })
)





module.exports = router;