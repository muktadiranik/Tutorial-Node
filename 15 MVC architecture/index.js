const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/users.route");
const productsRouter = require("./routes/products.route");
const categoriesRouter = require("./routes/categories.route");
const users = require("./models/users.model");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
// CORS
app.use("/api/users/", (req, res, next) => {
  res.send(users);
  next();
});

app.use(userRouter);
app.use(productsRouter);
app.use(categoriesRouter);
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
