const fs = require("fs");

fs.appendFile("test.txt", "Hello World Again!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
