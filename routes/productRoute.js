const express = require("express");
const {
  getAllProducts,
  createNewProducts,
  searchProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/search").post(searchProduct);
router.route("/product/new").post(createNewProducts);

module.exports = router;
