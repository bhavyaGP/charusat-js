class User {
  static text = "hello";
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  set name(value) {
    this._name = User.toNameCase(value);
  }

  get name() {
    return this._name;
  }

  static toNameCase(name) {
    console.log(this.text);
    return `${name[0].toUpperCase()}${name.slice(1)}`;
  }

  changeName(name) {
    this.name = name;
  }

  updateName(name) {
    this.name = name;
  }

  test() {
    return "test";
  }
}

class Employee extends User {}

class CEO extends User {
  constructor() {
    super("Ronak", 37, "male");
  }

  test() {
    return super.test();
  }
}

const e1 = new Employee("rohit", 34, "male");
console.log(e1);

const c1 = new CEO();

console.log(c1.test());

console.log(User.text);

console.log(User.toNameCase("rohit"));

const u1 = new User("yagnesh", 36, "male");

console.log(u1.name);

u1.changeName("yag");

u1.updateName("abc");

console.log(u1.name);
