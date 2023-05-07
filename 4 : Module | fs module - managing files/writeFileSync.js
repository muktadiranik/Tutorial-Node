const fs = require("fs");

fs.writeFileSync("test.txt", "Hello World!", "utf8");
console.log("The file has been saved!");
