const data = [1, 2, 3, 4, false, 6, 4, "abc", { a: 1 }, 2, 1];

console.log([...new Set(data)]);

// o(N)
const set = new Set(data);

console.log(set.has({ a: 1 }));

console.log(set);

set.add(7);

console.log(set);

console.log(set.size);

// O(1)
console.log(set.has(3));

// O(1)
console.log(set.delete(2));

// O(1)
console.log(set.has(4));

const obj = {
  a: 1,
  b: 2,
  c: 3,
  c: 4,
};

console.log(obj);
