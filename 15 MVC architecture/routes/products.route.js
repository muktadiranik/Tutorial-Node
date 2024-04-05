const express = require("express");
const router = express.Router();
const { getProducts, saveProducts } = require("../controllers/products.controller");

router.get("/products", (req, res) => {
  getProducts(req, res);
});

router.post("/products", (req, res) => {
  saveProducts(req, res);
});

module.exports = router;
