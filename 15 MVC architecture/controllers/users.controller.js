const users = require("../models/users.model");
const path = require("path");

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname, "./../views/index.html"));
};

exports.saveUser = (req, res) => {
  const name = req.body.name;
  const id = Number(req.body.id);
  const user = {
    name: name,
    id: id,
  };
  users.push(user);
  res.status(201).send({
    message: "User Created",
    users,
  });
};
