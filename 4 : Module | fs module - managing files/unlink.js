const fs = require("fs");

fs.unlink("test2.txt", (err) => {
  if (err) throw err;
  console.log("The file has been deleted!");
});
