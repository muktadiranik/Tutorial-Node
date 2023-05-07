const fs = require("fs");

fs.exists("test.txt", (exists) => {
  if (exists) {
    console.log("The file exists!");
  } else {
    console.log("The file does not exist!");
  }
});
