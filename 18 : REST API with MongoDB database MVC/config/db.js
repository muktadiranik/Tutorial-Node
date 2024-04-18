const mongoose = require("mongoose");
const config = require("./config");

const DBURL = config.db.url;

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
