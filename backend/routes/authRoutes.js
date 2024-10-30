const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

const registrationSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
router.post("/register", validateRequest(registrationSchema), register);
router.post("/login", validateRequest(loginSchema), login);
router.post("/logout", logout);

router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: 'Welcome to the user profile', user: req.user });
});

module.exports = router;
