const path = require("path");

const sample = "/mnt/F85C90A35C905DE6/Data/Tutorial-Node/Tutorial/#4 Node.js Global Object & Module System/index.js";

console.log(path.basename(sample));
console.log(path.dirname(sample));
console.log(path.basename(sample));
console.log(path.parse(sample));

const os = require("os");
console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());
