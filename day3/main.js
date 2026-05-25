// Closures Deep Dive
// Q1
// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const a = counter();
// const b = counter();

// a();
// a();

// b();
// b();

// Use case #1
// function bankAccount() {
//   let balance = 1000;

//   return {
//     deposit(amount) {
//       balance += amount;
//     },

//     getBalance() {
//       return balance;
//     },
//   };
// }

// const account = bankAccount();

// account.deposit(500);
// console.log(account.getBalance());

// Use case #2
// function createLogger(prefix) {
//   return function (message) {
//     console.log(`[${prefix}] ${message}`);
//   };
// }

// const errorLogger = createLogger("ERROR");
// const infoLogger = createLogger("INFO");

// errorLogger("DB failed");
// infoLogger("Server started");

// Interview trap
// function outer() {
//   let x = 10;

//   return function () {
//     x++;
//     console.log(x);
//   };
// }

// const a = outer();

// a();
// a();
// a();

// Final task
// function createCounter(start) {
//   let count = start;

//   return {
//     increment() {
//       count++;
//       console.log(count);
//     },

//     decrement() {
//       count--;
//       console.log(count);
//     },

//     current() {
//       console.log(count);
//     },
//   };
// }

// const counter = createCounter(5);
// counter.increment(); //6
// counter.increment(); //7
// counter.decrement(); //6
// counter.current(); //6

// Interview trap #2
// let name = "John";

// function outer() {
//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }

// const fn = outer();

// name = "Mike";
// fn();

// Task
// function outer() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//     },

//     log() {
//       console.log(count);
//     },
//   };
// }

// const obj = outer();

// obj.increment(); //0
// obj.increment(); //1

// obj.log(); //2

// Qn
// function outer() {
//   let x = 10;

//   return function inner() {
//     console.log(x);
//   };
// }

// const fn1 = outer();
// const fn2 = outer();

// fn1();
// fn2();

// Final task
function outer() {
  let x = 10;

  return {
    get() {
      return x;
    },

    set(value) {
      x = value;
    },
  };
}

const a = outer();
const b = outer();

a.set(50);

console.log(a.get()); //50
console.log(b.get()); //10
