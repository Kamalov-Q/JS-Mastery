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
// const animal = {
//   eats: true,
// };

// const dog = {
//   bark() {
//     console.log("woof");
//   },
// };

// Object.setPrototypeOf(dog, animal);

// console.log(dog.eats);
// dog.bark();

////
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(this.name);
//   }
// }

// const u = new User("John Doe");
// u.greet();
////
// const user = {
//   name: "John",
// };

// console.log(user.hasOwnProperty("name"));

/////
// const animal = {
//   eats: true,
// };

// const dog = {
//   bark() {
//     console.log("woof");
//   },
// };

// Object.setPrototypeOf(dog, animal);

/////
// function User(name) {
//   this.name = name;
// }

// const u = new User("John");

////
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(this.name);
//   }
// }

// function User(name) {
//   this.name = name;
// }

// User.prototype.greet = function () {
//   console.log(this.name);
// };

/////
// const animal = {
//   eats: true,
// };
// const dog = {
//   bark() {
//     console.log("woof");
//   },
// };

// Object.setPrototypeOf(dog, animal);
// console.log(dog.eats);
// console.log(dog.bark);

/////
// const animal = {
//   eats: true,
// };

// const dog = {
//   eats: false,
// };

// Object.setPrototypeOf(dog, animal);
// console.log(dog.eats);

/////
// const animal = {
//   eats: true,
// };

// const dog = {
//   eats: false,
// };

// Object.setPrototypeOf(dog, animal);

// console.log(dog.eats);

// delete dog.eats;

// console.log(dog.eats);

////
// const arr = [1, 2, 3];
// arr.push(4);
// arr.map((x) => x * 2);
// arr.filter((x) => x > 1);

////
// const arr = [1, 2, 3];
// console.log(arr.hasOwnProperty("push"));
// console.log(arr.hasOwnProperty("length"));
// console.log(arr.hasOwnProperty("map"));

///
// const arr = [1, 2, 3];

// console.log("map" in arr);
// console.log(arr.hasOwnProperty("map"));

///
// const obj = Object.create({
//   inherited: true,
// });

// obj.own = false;

// console.log("inherited" in obj);
// console.log(obj.hasOwnProperty("inherited"));
// console.log(obj.hasOwnProperty("own"));
