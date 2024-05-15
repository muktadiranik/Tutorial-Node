const express = require("express");
const blogController = require("../controllers/blog.controller");
const router = express.Router();
const Blog = require("../models/blog.model");

router.get("/blogs/create", (req, res) => {
  res.render("create", {
    title: "Create Blog",
    name: "Andrew Mead",
  });
});

router.post("/blogs/create", blogController.blogCreatePost);
router.get("/add-blog", blogController.addBlog);
router.get("/all-blogs", blogController.allBlogs);
router.get("/single-blog", blogController.blogCreateGet);
router.get("/blogs", blogController.blogIndex);
router.get("/blogs/:id", blogController.blogDetails);
router.delete("/blogs/:id", blogController.blogDelete);

module.exports = router;
