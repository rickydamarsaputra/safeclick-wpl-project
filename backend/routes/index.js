const express = require("express");
const { getUser, register, login, logout, forgotPassword, resetPassword, emailVerification } = require("../controllers/Users.js");
const { verifyToken } = require("../middleware/VerifyToken.js");
const { refreshToken } = require("../controllers/RefreshToken.js");
const { body } = require("express-validator");

const router = express.Router();

router.get('/users', verifyToken, getUser);
router.post('/register',
  body('name').optional({ nullable: false }),
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }), register);
router.post('/login', login);
router.get('/token', refreshToken);
router.put('/confirmation/:token', emailVerification);
router.delete('/logout', logout);
router.put('/reset-password/:token', resetPassword);
router.post('/forgot-password', forgotPassword);

module.exports= router;