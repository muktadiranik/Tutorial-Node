const fs = require("fs");

fs.renameSync("test.txt", "test2.txt");
console.log("The file has been renamed!");
