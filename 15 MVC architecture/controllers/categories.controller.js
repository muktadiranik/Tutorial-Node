const path = require("path");
const categories = require("../models/categories.model");

exports.getCategories = (req, res) => {
  res.sendFile(path.join(__dirname, "./../views/categories.html"));
};

exports.saveCategories = (req, res) => {
  const name = req.body.name;
  const id = Number(req.body.id);
  const category = {
    name: name,
    id: id,
  };
  categories.push(category);
  res.status(201).send({
    message: "Category Created",
    categories,
  });
};
