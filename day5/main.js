// Prototypes & Prototype chain

// const arr = [1, 2, 3];
// arr.push(4);

// console.log(arr);

// const animal = {
//   eats: true,
// };

// const dog = {
//   bark() {
//     console.log("woof");
//   },
// };

// Object.setPrototypeOf(dog, animal);

// dog.bark();
// console.log(dog.eats);

// function User(name) {
//   this.name = name;
// }

// const u = new User("John");

// console.log(u.name);

// function User(name) {
//   this.name = name;
// }

// User.prototype.greet = function () {
//   console.log(this.name);
// };

/////
const animal = {
  eats: true,
};

const dog = {
  bark() {
    console.log("woof");
  },
};

Object.setPrototypeOf(dog, animal);

console.log(dog.eats);
dog.bark();

////
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const u = new User("Name ekan");
u.greet();
