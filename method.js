const data = [
  {
    name: "Alice Johnson",
    age: 28,
    gender: "Female",
  },
  {
    name: "Michael Smith",
    age: 35,
    gender: "Male",
  },
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
    name: "Taimur",
    age: 8,
    gender: "Male",
  },
  {
    name: "Henry Harris",
    age: 31,
    gender: "Male",
  },
];

const arr = [1, 2, 4, 5];

//   primitive type of array
console.log(arr.indexOf(2));

//   non-primitive type of arr
const index = data.find((x) => {
  return x.name === "Yagnesh";
});

console.log(index);

// const maleRecords = data.filter(x => x.gender === "Other")

const isChildExist = data.some((x) => x.age > 18);

const isEveryAdult = data.every((x) => x.age > 18);

console.log(isEveryAdult);

console.log(isChildExist);

// console.log(maleRecords);

// immutables

// O(LogN)
// find

// findIndex

// O(N)
// filter

// some

// every

// map

// reduce
