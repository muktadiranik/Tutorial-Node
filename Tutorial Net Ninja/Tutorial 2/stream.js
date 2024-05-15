const fs = require("fs");

const readStream = fs.createReadStream("./original.txt ", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./copy.txt");

readStream.on("data", (chunk) => {
  console.log(chunk.toString());
  writeStream.write(chunk);
});
