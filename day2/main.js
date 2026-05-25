// Scope + Lexical Environment
// Q1
// let a = 10;
// function outer() {
//   let b = 20;

//   function inner() {
//     console.log(a + b); //10+20=30
//   }

//   inner();
// }

// outer();

// Q2
// let x = 1;

// function a() {
//   let x = 2;

//   function b() {
//     console.log(x);
//   }

//   return b;
// }

// const fn = a();
// fn();

// Q3
// let a = 5;

// function outer() {
//   let a = 10;

//   function inner() {
//     console.log(a);
//   }
//   return inner();
// }

// const fn = outer();
// fn();

// Q4
let x = 1;

function outer() {
  let x = 2;

  function middle() {
    let x = 3;

    function inner() {
      console.log(x);
    }

    inner();
  }

  middle();
}

outer();
