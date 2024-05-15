const people = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "Jen Smith",
    age: 27,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: 3,
    name: "William Johnson",
    age: 33,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const ages = [10, 20, 30, 40, 50];

console.log(people);

module.exports = { people, ages };
