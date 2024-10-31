const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  handleImageUpload,
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const { upload } = require("../helpers/cloudinary");

const router = express.Router();

router.post("/", authMiddleware, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);
router.post("/upload-image", upload.single("my_file"), handleImageUpload);

module.exports = router;
