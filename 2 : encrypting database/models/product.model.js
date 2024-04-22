const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: 0,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: {
    type: String,
    default: "placeholder.png",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
