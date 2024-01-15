const productModel = require("../models/productModel");

const createNewProducts = async (req, res) => {
  const result = await productModel.create(req.body);

  res.status(201).json({ mssg: "Product Created", result });
};

const getAllProducts = async (req, res) => {
  const result = await productModel.find({});
  res.status(200).json({ mssg: "Success", result });
};

const searchProduct = async (req, res) => {
  const { keyword } = req.body;
  const result = await productModel.find({ name: { $regex: keyword } });
  res.status(200).json({ result });
};

module.exports = { getAllProducts, createNewProducts, searchProduct };
