// Execution Context
// Q1
// function a() {
//   b();
// }

// function b() {
//   console.log("B");
// }

// a();

// Q2
// var x = 1;

// function outer() {
//   var x = 2;

//   function inner() {
//     console.log(x);
//   }

//   inner();
// }

// outer();

// Q3
// var x = 10;

// function outer() {
//   var x = 20;

//   function middle() {
//     var x = 30;

//     function inner() {
//       console.log(x);
//     }

//     inner();
//   }

//   middle();
// }

// outer();

// Q4
// function test() {
//   var a = 1;

//   function inner() {
//     console.log(a); //1
//   }

//   return inner();
// }

// const fn = test();
// fn();

// Q5
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const a = outer();
a();
a();
a();
