// Learn how to THINK in code -> freeCodeCamp.org
// Chapter 1
// var x = 23;

// function myFunc() {
//   var x = 10;
//   if (true) {
//     var a = 5;
//     let b = 10;
//     console.log(b);
//   }
//   console.log(a);
// }

// myFunc();

// Chapter 2
// var num1 = 2;

// function sum() {
//   var num2 = 3;
//   return function () {
//     return num1 + num2;
//   };
// }

// var myFunc = sum();

// console.log(myFunc());
// console.dir(sum);

//////
// function bankAccount(initialBalance) {
//   var balance = initialBalance;

//   return function () {
//     return balance;
//   };
// }

// var account = bankAccount(100000);
// console.log(account());

/////
// (function () {
//   var num1 = 2;
//   var num2 = 3;
//   function sum() {
//     return num1 + num2;
//   }

//   console.log(sum());

//   num1 = 6;
//   num2 = 7;

//   console.log(sum());
// })();

let num1 = 2; //closure
let num2 = 3; //closure

function sum() {
  return num1 + num2;
}

console.log(sum());

