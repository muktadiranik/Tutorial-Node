const http = require("http");
const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write("<h1>Hello World</h1>");
  res.write("<h1>Hello World</h1>");
  res.write("<h1>Hello World</h1>");
  res.write("<h1>Hello World</h1>");
  res.write("<h1>Hello World</h1>");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
