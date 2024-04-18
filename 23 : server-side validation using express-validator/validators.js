const { check } = require("express-validator");

exports.userRegistrationValidators = [
  check("name").trim().notEmpty().withMessage("Name is required").isLength({ min: 3 }).withMessage("Name is too short"),

  check("email").trim().isEmail().withMessage("Email is invalid"),

  check("password").trim().isLength({ min: 1 }).withMessage("Password is required"),

  check("dob").notEmpty().withMessage("Date of Birth is required").isISO8601().withMessage("Date of Birth is invalid").toDate(),
];
