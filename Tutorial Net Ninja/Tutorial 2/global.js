console.log(global);
const { people, ages } = require("./people");

global.setTimeout(() => {
  console.log("global");
  clearInterval(int);
}, 3000);

const int = global.setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

console.log(__dirname);
console.log(__filename);

console.log(people);
console.log(ages);

const os = require("os");
console.log(os.platform(), os.homedir());
