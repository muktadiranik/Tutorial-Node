const { v4: uuidv4 } = require("uuid");
const users = [
  {
    name: "John",
    id: 1,
    uuid: uuidv4(),
  },
  {
    name: "Jane",
    id: 2,
    uuid: uuidv4(),
  },
];

module.exports = users;
