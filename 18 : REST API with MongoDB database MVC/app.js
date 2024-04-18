const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
require("./config/db");

const usersRouter = require("./routes/users.route");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/./views/index.html"));
});

app.use("/api/users", usersRouter);

app.use("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
