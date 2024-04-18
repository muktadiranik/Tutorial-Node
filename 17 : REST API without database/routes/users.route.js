const express = require("express");
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser } = require("../controllers/users.controller");

router.get("/", (req, res) => {
  getUsers(req, res);
});

router.post("/", (req, res) => {
  addUser(req, res);
});

router.put("/:uuid", (req, res) => {
  updateUser(req, res);
});

router.delete("/:uuid", (req, res) => {
  deleteUser(req, res);
});

module.exports = router;
