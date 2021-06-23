
// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const winesRouter = require('./wines.js');
const journalRouter = require('./journal.js')

router.use('/session', sessionRouter);
router.use('/wines', winesRouter), 
router.use('/users', usersRouter);
router.use('/journal', journalRouter)




module.exports = router;

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

// const express = require('express');
// const asyncHandler = require('express-async-handler');

// const { setTokenCookie, restoreUser } = require('../../utils/auth');
// const { User } = require('../../db/models');

// const router = express.Router();



//CODE FOR TESTING AUTH MIDDLEWARE ROUTES

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

