const http = require("http");
const fs = require("fs");

const httpServer = http.createServer((req, res) => {
  console.log(req.url, req.method);

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      fs.readFile("./views/index.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end("Error");
        } else {
          res.statusCode = 200;
          res.end(data);
        }
      });
      break;
    case "/about":
      res.setHeader("Content-Type", "text/html");
      fs.readFile("./views/about.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end("Error");
        } else {
          res.statusCode = 200;
          res.end(data);
        }
      });
      break;
    case "/contact":
      res.setHeader("Content-Type", "text/html");
      fs.readFile("./views/contact.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end("Error");
        } else {
          res.statusCode = 200;
          res.end(data);
        }
      });
      break;
    default:
      res.setHeader("Content-Type", "text/html");
      fs.readFile("./views/404.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end("Error");
        } else {
          res.statusCode = 404;
          res.end(data);
        }
      });
      break;
  }
});

httpServer.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
