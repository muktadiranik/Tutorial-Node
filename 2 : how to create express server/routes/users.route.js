const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.cookie("user", "user", { maxAge: 900000, httpOnly: true });
  res.cookie("password", "password", { maxAge: 900000, httpOnly: true });
  res.send("Login Page");
  res.end();
});

router.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.get("/profile", (req, res) => {
  res.redirect("/users/login");
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.clearCookie("password");
  res.send("Logout Page");
  res.end();
});

module.exports = router;
