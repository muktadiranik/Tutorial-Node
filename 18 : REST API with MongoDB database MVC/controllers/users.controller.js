const User = require("../models/users.models");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    await User.findOne({ _id: req.params.id }).then((user) => {
      res.status(200).json(user);
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const addUser = async (req, res) => {
  try {
    const user = new User({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
    });
    await user.save();
    res.status(201).json(user);
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).then((user) => {
      if (req.body.name !== undefined) user.name = req.body.name;
      if (req.body.email !== undefined) user.email = req.body.email;
      user.save();
      res.status(200).json(user);
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "User Deleted",
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
