const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      maxLength: [8, "Price should not exceed 8 figures"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    image: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
  },
  { collection: "products" }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
