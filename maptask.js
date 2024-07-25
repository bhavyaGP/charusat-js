const data = [
  {
    name: "Alice Johnson",
    age: 28,
    gender: "Female",
  },
  ,
  {
    name: "Emma Brown",
    age: 22,
    gender: "Female",
  },
  {
    name: "Daniel Wilson",
    age: 30,
    gender: "Male",
  },
  {
    name: "Olivia Davis",
    age: 26,
    gender: "Female",
  },
  {
    name: "James Martinez",
    age: 40,
    gender: "Male",
  },
  {
    name: "Sophia Garcia",
    age: 33,
    gender: "Female",
  },
  {
    name: "Benjamin Lee",
    age: 27,
    gender: "Male",
  },
  {
    name: "Ava White",
    age: 29,
    gender: "Female",
  },
  {
    name: "Henry Harris",
    age: 31,
    gender: "Male",
  },
];

const map = new Map();

map.set("Alice Johnson", {
  name: "Alice Johnson",
  age: 28,
  gender: "Female",
});

map.set("Michael Smith", {
  name: "Michael Smith",
  age: 35,
  gender: "Male",
});

//   O(1)
console.log(map.get("Alice Johnson"));

//   O(1)
map.delete("Alice Johnson");

console.log(map);
