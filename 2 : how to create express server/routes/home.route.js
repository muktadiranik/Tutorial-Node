const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.put("/about", (req, res) => {
  res.send({
    message: "About Page",
    status: 200,
    url: req.url,
    method: req.method,
    body: req.body,
  });
  res.end();
});

router.post("/contact", (req, res) => {
  res.send({
    message: "Contact Page",
    status: 200,
    url: req.url,
    method: req.method,
    body: req.body,
  });
  res.end();
});

router.delete("/delete", (req, res) => {
  res.send({
    message: "Delete Page",
    status: 200,
    url: req.url,
    method: req.method,
    body: req.body,
  });
  res.end();
});

router.patch("/update", (req, res) => {
  res.send({
    message: "Update Page",
    status: 200,
    url: req.url,
    method: req.method,
    body: req.body,
  });
  res.end();
});

router.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/views/dashboard.html");
});

// Query Params
router.get("/query", (req, res) => {
  if (req.query && req.query.name) {
    res.send({
      message: "Query Page",
      status: 200,
      url: req.url,
      method: req.method,
      query: req.query,
    });
  } else {
    res.send({
      message: "Query Page",
      status: 200,
      url: req.url,
      method: req.method,
      query: req.query,
    });
  }
  if (req.query) {
    const { name, age } = req.query;
    res.send({ name, age });
  }
});

// Route Params
router.get("/param/user/:user/id/:id", (req, res) => {
  res.send({
    message: "Param Page",
    status: 200,
    url: req.url,
    method: req.method,
    params: req.params,
    user: req.params.user,
    id: req.params.id,
  });
});

// Header Params
router.get("/header", (req, res) => {
  for (let key in req.headers) {
    res.send({
      message: "Header Page",
      status: 200,
      url: req.url,
      method: req.method,
      headers: req.headers,
      key,
      value: req.headers[key],
    });
  }
});

// JSON Body
router.post("/json", (req, res) => {
  res.send({
    message: "JSON Page",
    status: 200,
    url: req.url,
    method: req.method,
    body: req.body,
  });
});

// URL Encoded Body
router.post("/urlencoded", (req, res) => {
  res.send({
    message: "URL Encoded Page",
    status: 200,
    url: req.url,
    method: req.method,
    body: req.body,
  });
});

// Form Data
router.post("/formData", (req, res) => {
  res.send({
    message: "Form Data Page",
    status: 200,
    url: req.url,
    method: req.method,
    body: req.body,
  });
});

module.exports = router;
