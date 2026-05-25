// this, call, apply and bind
// const user = {
//   name: "John",

//   greet() {
//     console.log(this.name);
//   },
// };

// user.greet();

////////
// const user = {
//   name: "John",
//   greet() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.greet.bind(user), 1000);

////////
// const person = {
//   name: "Alice",

//   greet() {
//     console.log(this.name);
//   },
// };

// person.greet();

// const fn = person.greet.bind(person);

// fn();

////////
// function greet() {
//   console.log(this.name);
// }

// const user = {
//   name: "John",
// };

// greet.call(user);

////////
// function introduce(city, country) {
//   console.log(`${this.name} lives in ${city}, ${country}`);
// }

// const user = {
//   name: "John",
// };

// introduce.call(user, "Tashkent", "Uzbekistan");

////////
// function greet() {
//   console.log(this.name);
// }
// const user = {
//   name: "John",
// };

// const fn = greet.bind(user);
// console.log("before");

// fn();
// console.log("after");

////////
// function greet() {
//   console.log(this.name);
// }

// const user1 = {
//   name: "John",
// };

// const user2 = {
//   name: "Mike",
// };

// const fn = greet.bind(user1);

// fn();

// fn.call(user2);
// fn.apply(user2);

///////
// const person = {
//   name: "Alice",
//   greet: () => {
//     console.log(this.name);
//   },
// };

// person.greet();

/////////
const user = {
  name: "John",

  regular() {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  },
};

const r = user.regular;
const a = user.arrow;

r(); //undefined
a(); // undefined
