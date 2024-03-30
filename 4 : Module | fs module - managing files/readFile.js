const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFileSync("test.txt", "utf8");
console.log("The file has been read!");
