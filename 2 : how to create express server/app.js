const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");
const homeRoute = require("./routes/home.route");

app.use("/users", userRouter);
app.use("/", homeRoute);

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/routes/views/404.html");
});

module.exports = app;
