const express = require("express");
const app = express();
const usersRouter = require("./routes/users.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
