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
  {
    name: "Joe",
    id: 3,
    uuid: uuidv4(),
  },
  {
    name: "Jim",
    id: 4,
    uuid: uuidv4(),
  },
  {
    name: "Jill",
    id: 5,
    uuid: uuidv4(),
  },
  {
    name: "Jack",
    id: 6,
    uuid: uuidv4(),
  },
  {
    name: "Judy",
    id: 7,
    uuid: uuidv4(),
  },
  {
    name: "Jen",
    id: 8,
    uuid: uuidv4(),
  },
];

module.exports = users;
