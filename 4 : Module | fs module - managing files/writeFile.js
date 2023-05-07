const fs = require("fs");

fs.writeFile("test.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.writeFileSync("test.txt", "Hello World!");
