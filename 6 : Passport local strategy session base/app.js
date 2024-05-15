const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo"); // Import connect-mongo
const app = express();
require("./config/database");
const User = require("./models/user.model");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Set up express-session middleware with connect-mongo
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/session", // Provide correct MongoDB URL
      ttl: 14 * 24 * 60 * 60, // Time to live (expiration time) in seconds
      autoRemove: "native", // Automatically remove expired sessions
    }),
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          // Set user in session
          req.session.user = user;
          res.redirect("/profile");
        } else {
          res.redirect("/login");
        }
      });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    } else {
      bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        if (err) {
          console.error(err);
          return res.status(500).send("Error hashing password");
        }
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });
        await newUser.save();
        res.status(201).redirect("/login");
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const checkAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

app.get("/profile", checkAuthenticated, (req, res) => {
  res.render("profile");
});

app.get("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error logging out");
      }
      res.redirect("/");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = app;
