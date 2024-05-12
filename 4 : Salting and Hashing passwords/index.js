const express = require("express");
const app = express();
const PORT = 3000;
const Users = require("./model/users.model");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const saltRounds = 10;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password
    const hash = await bcrypt.hash(password, saltRounds);
    // Create and save the new user
    const newUser = new Users({ name, email, password: hash });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Login successful (consider sending a JWT token here)
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/change-password", async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    // Find the user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // Compare current password
    const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }
    // Hash the new password
    const newHash = await bcrypt.hash(newPassword, saltRounds);
    // Update user's password
    user.password = newHash;
    await user.save();
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
