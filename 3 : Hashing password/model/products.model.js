const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Products = mongoose.model("Product", productSchema); // Assuming "Product" is the desired collection name

module.exports = Products; // Export the model
