const express = require("express");
const userRouter = express.Router();
const { getUsers, saveUser } = require("../controllers/users.controller");

userRouter.get("/", (req, res) => {
  getUsers(req, res);
});

userRouter.post("/", (req, res) => {
  saveUser(req, res);
});

module.exports = userRouter;
