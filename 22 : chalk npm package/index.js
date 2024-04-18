const express = require("express");
const app = express();
const chalk = require("chalk");

const success = chalk.green.bold;
const error = chalk.red.bold;

app.get("/", (req, res) => {
  console.log(success("Hello World"));
  res.send("Hello World");
});

app.post("/", (req, res) => {
  try {
    throw new Error("Hello World");
  } catch (error) {
    console.log(error);
  }
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(chalk.blue.bold("Server is running at http://localhost:3000"));
});
