const fs = require("fs");

fs.readFile("test2.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFileSync("test2.txt", "utf8");
console.log("The file has been read!");
