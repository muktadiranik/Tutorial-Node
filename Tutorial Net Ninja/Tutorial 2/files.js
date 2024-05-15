const fs = require("fs");

fs.readFile("./sample.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

fs.writeFile("./demo.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.writeFile("./test.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  }
});

if (!fs.existsSync("./test")) {
  fs.mkdir("./test", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder created...");
  });
} else {
  fs.rmdir("./test", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted...");
  });
}

if (fs.existsSync("./test.txt")) {
  fs.unlink("./test.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted...");
  });
}

const originalText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ".repeat(
    100000
  );
fs.writeFile("./original.txt", originalText, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Created large file (100000 lines) of ${originalText.length} characters`);
});
