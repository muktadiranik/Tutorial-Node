const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const height = parseInt(req.body.height);
  const width = parseInt(req.body.width);
  const area = height * width;
  const data = { area };
  res.render("result", data);
});

app.use((req, res) => {
  res.send("Hello World");
});

module.exports = app;
