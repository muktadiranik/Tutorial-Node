const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("/");
      res.end();
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("about");
      res.end();
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("contact");
      res.end();
      break;
    default:
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Not Found");
      res.end();
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
