const ProductModel = require("../models/product");

const AllProducts = async (req, res) => {
  try {
    const Users = await ProductModel.find();
    res.status(201).json(Users);
  } catch (error) {
    res.status(401).json(error);
  }
};

const addnewproduct = async (req, res) => {
  try {
    const newProduct = await ProductModel.create({
      Image: req.file.filename,
      price: req.body.price,
      description: req.body.description,
      productName: req.body.productName,
    });
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(200).json(error);
  }
};
module.exports = { AllProducts, addnewproduct };
