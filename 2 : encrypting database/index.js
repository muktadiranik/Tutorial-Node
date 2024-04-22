require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const dbURL = process.env.MONGODB_URL;
const { User } = require("./models/users.model");

const connect = async () => {
  try {
    await mongoose.connect(dbURL).then(() => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.log(error);
  }
};
connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

app.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if (user && user.password === password) {
      res.status(200).json({
        user,
      });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use((err, req, res, next) => {
  res.status(404).json({
    message: "Page not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
