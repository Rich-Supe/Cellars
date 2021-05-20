
// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

module.exports = router;



// const express = require('express');
// const asyncHandler = require('express-async-handler');

// const { setTokenCookie, restoreUser } = require('../../utils/auth');
// const { User } = require('../../db/models');

// const router = express.Router();


// Log in
// router.post(
// '/',
// asyncHandler(async (req, res, next) => {
//     const { credential, password } = req.body;

//     const user = await User.login({ credential, password });

//     if (!user) {
//     const err = new Error('Login failed');
//     err.status = 401;
//     err.title = 'Login failed';
//     err.errors = ['The provided credentials were invalid.'];
//     return next(err);
//     }

//     await setTokenCookie(res, user);

//     return res.json({
//     user,
//     });
// }),
// );




module.exports = router;

//CODE FOR TESTING AUTH MIDDLEWARE ROUTES

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
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

