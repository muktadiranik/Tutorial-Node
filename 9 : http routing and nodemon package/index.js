console.log("9 : http routing and nodemon package");

const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  const handleReadFile = (file, status) => {
    fs.readFile(file, (err, data) => {
      res.writeHead(status, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleReadFile("./pages/index.html", 200);
  } else if (req.url === "/about") {
    handleReadFile("./pages/about.html", 200);
  } else if (req.url === "/contact") {
    handleReadFile("./pages/contact.html", 200);
  } else {
    handleReadFile("./pages/error.html", 404);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
