const express = require("express");
const { runValidation } = require("../validations/users.validation");
const { registerUser } = require("../controllers/users.controller");
const { userRegistrationValidators } = require("../validators");
const usersRouter = express.Router();

usersRouter.post("/", userRegistrationValidators, runValidation, registerUser);

module.exports = usersRouter;
