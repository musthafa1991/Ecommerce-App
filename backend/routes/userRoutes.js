const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
  deleteUser,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


router.get("/profile", authMiddleware, getUserProfile); 
router.put("/profile", authMiddleware, updateUserProfile); 
router.delete("/:id", authMiddleware, deleteUser); 

module.exports = router;
