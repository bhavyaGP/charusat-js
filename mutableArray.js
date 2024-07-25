const arr = [1, 2, 3, 4, 5, 9];

const index = 2;

const a1 = arr.slice(0, index);

const a2 = arr.slice(index + 1);

const finalArray = [...a1, ...a2];

console.log(finalArray);

// const newArr = [0, ...arr, 6]

// console.log(newArr);
