const School = require("./school");

school = new School();

school.on("event", (period, text) => {
  console.log("Hello World", period, text);
});

school.school();
