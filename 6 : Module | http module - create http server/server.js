const http = require("http");
const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
