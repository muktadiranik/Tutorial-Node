const { v4: uuidv4 } = require("uuid");
const users = require("../models/users.model");

exports.getUsers = (req, res) => {
  res.status(200).json({ users });
};

exports.addUser = (req, res) => {
  const name = req.body.name;
  const id = Number(req.body.id);
  const uuid = uuidv4();
  const user = {
    name: name,
    id: id,
    uuid: uuid,
  };
  users.push(user);
  res.status(201).send({
    message: "User Created",
    users,
  });
};

exports.updateUser = (req, res) => {
  const uuid = req.params.uuid;
  const name = req.body.name;
  users
    .filter((user) => user.uuid === uuid)
    .map((user) => {
      user.name = name;
    });
  res.send({
    message: "User Updated",
    users,
  });
};

exports.deleteUser = (req, res) => {
  const uuid = req.params.uuid;
  const newUsers = users.filter((user) => user.uuid !== uuid);
  res.send({
    message: "User Deleted",
    newUsers,
  });
};
