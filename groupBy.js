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
    name: "Henry Harris",
    age: 31,
    gender: "Male",
  },
];

const age = 94;

const ageGroup = Math.floor(age / 10);

const key = `${ageGroup}0-${ageGroup}9`;
console.log(key);

("30-39");

//   {
//     "20-29": [],
//     "30-35": []
//   }

//   {
//    "00-09": [] ,
//    "20-29": []
//   }

const groupBy = data.reduce((p, c) => {
  // const key = c.gender;
  const ageGroup = Math.floor(c.age / 10);
  const key = `${ageGroup}0-${ageGroup}9`;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupBy);

//   const obj = {
//     a:1,
//     b: 2
//   }

//   console.log(obj.c);

//   obj.c = 3;

//   console.log(obj.c);

//   1. check property exist
//    2. if not exist create propety with []
//  3. add item in array

//   {
//     "male": [],
//     "female": []
//   }

//   const index = data.reduce((p, c) => {
//     console.log(p);
//     if(c.gender === "Male") {
//         return [...p, c]
//     }
//     return p;
//   }, [])

//   console.log(index);

//   const index = data.findIndex(x => x.name === "yagnesh modh")
//   console.log(index);

// const arr = [1,2,3,4,5,6,7, 8, 9]

// const sum = arr.reduce((p, c) => p + c, 0)

// console.log(sum);

// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum += element;
// }

// console.log(sum);
