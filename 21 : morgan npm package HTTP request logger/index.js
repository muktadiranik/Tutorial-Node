const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
