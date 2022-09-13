const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Image: { type: String },
  price: { type: Number },
  description: { type: String },
  productName: { type: String },
});

module.exports = mongoose.model("product", productSchema);
