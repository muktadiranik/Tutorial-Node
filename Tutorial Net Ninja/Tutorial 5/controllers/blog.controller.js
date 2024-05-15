const Blog = require("../models/blog.model");

const blogIndex = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index", {
        title: "All Blogs",
        blogs: blogs,
        name: "Andrew Mead",
        description: "Hello, World!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

const blogDetails = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Blog not found");
    });
};

const blogCreateGet = (req, res) => {
  res.render("create", {
    title: "Create a new blog",
    name: "Andrew Mead",
  });
};

const blogCreatePost = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Bad Request");
    });
};

const blogDelete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

const addBlog = (req, res) => {
  const blog = new Blog({
    title: "New Blog",
    snippet: "Lorem ipsum dolor sit amet consectetur",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

const allBlogs = (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = { blogIndex, blogDetails, blogCreateGet, blogCreatePost, blogDelete, addBlog, allBlogs };
