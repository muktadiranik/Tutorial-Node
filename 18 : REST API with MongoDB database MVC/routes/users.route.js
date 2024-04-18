const express = require("express");
const router = express.Router();
const { getAllUsers, getOneUser, addUser, updateUser, deleteUser } = require("../controllers/users.controller");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
