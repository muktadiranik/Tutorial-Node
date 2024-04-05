const express = require("express");
const router = express.Router();
const { getCategories, saveCategories } = require("../controllers/categories.controller");

router.get("/categories", (req, res) => {
  getCategories(req, res);
});

router.post("/categories", (req, res) => {
  saveCategories(req, res);
});

module.exports = router;
