const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello World");
fs.writeFileSync("hello.txt", " how are you", { flag: "a" });

fs.writeFileSync("sample.txt", "Hello World");
fs.appendFileSync("sample.txt", " how are you");

console.log(fs.readFileSync("sample.txt", "utf8"));
console.log(fs.readFileSync("hello.txt", "utf8"));

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Hello World");
