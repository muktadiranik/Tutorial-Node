const express = require("express");
const { default: mongoose } = require("mongoose");
var md5 = require("md5");
const Products = require("./model/products.model");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  const { name, price } = req.body;
  const product = new Products({ name: md5(name), price: price });
  product.save();
  res.send(product);
});

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
