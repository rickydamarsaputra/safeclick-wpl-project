import express from "express";
import { getUser, register, login, logout, forgotPassword, resetPassword, emailVerification } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { body } from "express-validator";

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

export default router;