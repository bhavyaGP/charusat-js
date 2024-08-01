const user1 = {
  name: "yagnesh",
  age: 36,
  gender: "male",
};

const user2 = {
  name: "virat",
  age: 32,
  gender: "male",
  profession: "cricketer",
};

class User {
  gender = "male";
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession || "n/a";
  }

  #getInfo() {
    return "hello";
  }

  displayInfo() {
    console.log(this.#getInfo());
  }
}

const u1 = new User("yagnesh", 36);
const u2 = new User("virat", 32, "cricketer");

console.log(u1);
console.log(u2);

console.log(u1.displayInfo());

// function add(a, b) {
//     return a + b;
// }

// console.log(add(1,2));

// class Calc {
//     c = 3;

//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }

//     add() {
//         return this.a + this.b + this.c;
//     }

//     sub() {
//         return this.a - this.b;
//     }

// }

// const calc = new Calc(1,2)
// console.log(calc.add());
// console.log(calc.sub());

// Encapsulation

// class User {
//    constructor() {

//    }

// }

// const name = "yagnesh"
