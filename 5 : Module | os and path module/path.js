console.log(__dirname);
console.log(__filename);

const path = require("path");
console.log(path);

const extentionName = path.extname("index.js");
console.log(extentionName);

const joinPath = path.join(__dirname, "index.js");
console.log(joinPath);

const joinPath2 = path.join(__dirname, "../views/index.html");
console.log(joinPath2);
