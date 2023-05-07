const fs = require("fs");

fs.rename("test.txt", "test2.txt", (err) => {
  if (err) throw err;
  console.log("The file has been renamed!");
});
