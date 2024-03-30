const express = require("express");
const app = express();

app.use(express.static("public"));

const sampleMiddleware = (req, res, next) => {
  let date = new Date(Date.now());
  console.log(date);
  console.log("sample middleware");
  next();
};

const dateMiddleware = (req, res, next) => {
  let date = new Date(Date.now());
  req.currentDate = date;
  console.log(date);
  next();
};

const commonMiddleware = (req, res, next) => {
  console.log("common middleware");
  next();
};

app.use(commonMiddleware);

app.get((req, res, next) => {
  res.send("error");
});

app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});

app.get("/", sampleMiddleware, (req, res) => {
  res.send("Hello World");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/date", dateMiddleware, (req, res) => {
  res.send(req.currentDate);
  res.end();
});

app.get("/products/:id([0-9]{3})", (req, res) => {
  res.send(req.params.id);
});

app.get("/titles/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(req.params.title);
});

// Wild card
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
