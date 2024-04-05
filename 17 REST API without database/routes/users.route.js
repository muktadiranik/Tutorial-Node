const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/users.controller");

router.get("/", (req, res) => {
  getUsers(req, res);
});

module.exports = router;
