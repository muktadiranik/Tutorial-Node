const products = require("../models/products.model");
const path = require("path");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "./../views/products.html"));
};

exports.saveProducts = (req, res) => {
  const name = req.body.name;
  const id = Number(req.body.id);
  const product = {
    name: name,
    id: id,
  };
  products.push(product);
  res.status(201).send({
    message: "Product Created",
    products,
  });
};
