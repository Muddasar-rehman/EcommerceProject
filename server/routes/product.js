const express = require("express");
const productController = require("../controller/product");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/allproduct", productController.AllProducts);

router.post(
  "/addnewproduct",
  authMiddleware.upload,
  productController.addnewproduct
);
module.exports = router;
