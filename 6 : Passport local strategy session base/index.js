require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
