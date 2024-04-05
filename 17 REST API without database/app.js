const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const userRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.use((req, res) => {
  res.status(500).send("Internal Server Error");
});

module.exports = app;
