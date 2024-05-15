const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog.model");
const blogRoutes = require("./routes/blogRoutes");

app.set("view engine", "ejs");

MONGODB_URL = "mongodb://localhost:27017/Tutorial";
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Middleware to log request details
app.use((req, res, next) => {
  console.log("I am a middleware");
  console.log("hostname", req.hostname);
  console.log("path", req.path);
  console.log("method", req.method);
  next();
});

// Another middleware
app.use((req, res, next) => {
  console.log("I am another middleware");
  next();
});

app.use(blogRoutes);

// Define routes
app.get("/", (req, res) => {
  const blogs = [
    { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" },
  ];
  res.render("index", {
    title: "Home",
    name: "Andrew Mead",
    description: "Hello, World!",
    blogs: blogs,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew Mead",
  });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    name: "Andrew Mead",
  });
});

// Wildcard route handler for handling undefined routes
app.use("*", (req, res) => {
  res.render("404", { title: "Page Not Found" });
});
