const users = require("../models/users.model");

exports.getUsers = (req, res) => {
  res.status(200).json({ users });
};
