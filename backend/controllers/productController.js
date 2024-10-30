const { imageUploadUtil } = require("../helpers/cloudinary");
const Product = require("../models/Product");

// Create a new product
exports.createProduct = async (req, res) => {
  const {
    image,
    name,
    description,
    category,
    brand,
    price,
    salePrice,
    totalStock,
    productReview,
  } = req.body;
  try {
    const product = new Product({
      image,
      name,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      productReview,
    });
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const {
    image,
    name,
    description,
    category,
    brand,
    price,
    salePrice,
    totalStock,
    productReview,
  } = req.body;

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.image = image || product.image;
    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.price = price || product.price;
    product.salePrice = salePrice || product.salePrice;
    product.totalStock = totalStock || product.totalStock;
    product.productReview = productReview || product.productReview;

    await product.save();
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};
