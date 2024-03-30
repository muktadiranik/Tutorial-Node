const app = require("./app");
const port = 3000;
const hostname = "localhost";

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
