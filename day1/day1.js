// Execution Context + Call Stack + Closure Mastery 01.05.2026

// const stack = [];

// function enter(name) {
//   stack.push(name);
//   console.log("\nENTER:", name);
//   console.log("STACK:", [...stack]);
// }

// function exit() {
//   console.log("EXIT:", stack[stack.length - 1]);
//   stack.pop();
//   console.log("STACK:", [...stack]);
// }

// // --- actual code with logs ---

// var x = 1;
// console.log("Global x =", x);

// function outer() {
//   enter("outer");

//   var x = 2;
//   console.log("outer x =", x);

//   function inner() {
//     enter("inner");

//     console.log("inner sees x =", x);

//     exit();
//   }

//   exit();
//   return inner;
// }

// var fn = outer();
// console.log("\nfn assigned");

// fn();

// var x = 1;

// function outer() {
//   var x = 2;

//   function inner() {
//     console.log(x);
//   }

//   x = 100;

//   return inner;
// }

// var fn = outer();

// fn();

// var x = 1;

// function outer() {
//   var x = 2;

//   function inner() {
//     console.log(x);
//   }

//   x = 50;

//   return inner;
// }

// var fn = outer();
// fn();

// function outer() {
//   var x = 10;

//   return function inner() {
//     console.log(x);
//   };
// }

// var fn1 = outer();
// var fn2 = outer();

// fn1();
// fn2();

// function outer() {
//   var x = 0;

//   return function inner() {
//     x++;
//     console.log(x);
//   };

// }

// var fn1 = outer();
// var fn2 = outer();

// fn1();
// fn1();
// fn2();
// fn2();

// function outer() {
//   var x = 0;

//   return function inner() {
//     return ++x;
//   };
// }

// var a = outer();
// var b = outer();

// console.log(a());
// console.log(b());
// console.log(a());
// console.log(b());

// function outer() {
//   var x = 0;

//   return function inner() {
//     return x++;
//   };
// }

// var a = outer();
// var b = outer();

// console.log(a());
// console.log(a());
// console.log(b());
// console.log(b());

// var x = 10;

// function outer() {
//   console.log(x);

//   var x = 20;

//   return function inner() {
//     console.log(x);
//   };
// }

// var fn = outer();
// fn();

// var x = 10;

// function test() {
//   console.log(x);

//   if (true) {
//     var x = 50;
//   }

//   console.log(x);
// }

// test();

// let x = 0;

// console.log(x++);
// console.log(++x);
// console.log(x);

// let x = 0;

// console.log(x++); //0
// console.log(x++); //1
// console.log(++x); //3
// console.log(x);  //3

// function outer() {
//   let x = 0;

//   return function () {
//     console.log(x++); //0
//     return x; //x -> 1
//   };
// }

// const fn = outer();

// console.log(fn());
// console.log(fn());

// var x = 5;

// function test() {
//   console.log(x); //undefined
//   var x = 10;
//   console.log(x); //10
// }

// test();

// var x = 5;

// function test() {
//   console.log(x);
// }

// function run() {
//   var x = 10;
//   test();
// }

// run();

// function outer() {
//   let count = 0;

//   return function () {
//     return ++count;
//   };
// }

// const fn = outer();

// console.log(fn()); //1
// console.log(fn()); //2
// console.log(fn()); //3

// function outer() {
//   let count = 0;

//   return function () {
//     return ++count;
//   };
// }

// const a = outer(); //New FEC
// const b = outer(); //New FEC

// console.log(a()); //1
// console.log(a()); //2
// console.log(b()); //1
// console.log(b()); //2

// function test1() {
//   let x = 0;
//   return x++;
// }

// function test2() {
//   let x = 0;
//   console.log(x++);
// }

// console.log(test1()); //0
// console.log(test2()); //0
// //undefined

// function outer() {
//   let x = 0;

//   return function () {
//     console.log(x);
//     return x++;
//   };
// }

// const fn = outer();

// console.log(fn()); //0, 0 ->1
// console.log(fn()); // 1, 1 ->2

// let x = 1;
// console.log(x++ + ++x); //4 = 1+3

// let x = 1;
// console.log(++x + x++ + x); //2+2+3=7

// function outer() {
//   let x = 0;

//   return function () {
//     console.log(x++); //0 ->1
//     console.log(++x); //2
//   };
// }

// const fn = outer();

// fn(); //0, 2
// fn(); //2, 4

// var x = 10;

// function outer() {
//   console.log(x); //undefined

//   var x = 20;

//   return function inner() {
//     console.log(x);
//   };
// }

// var fn = outer();
// fn();

// function outer() {
//   let x = 1;

//   return function () {
//     console.log(x++); //1 -> 2
//     return ++x; //->3
//   };
// }

// const fn = outer();

// console.log(fn()); //1, 3
// console.log(fn()); //3, 5

//Q1
// var x = 10;

// function outer() {
//   console.log(x); //undefined

//   var x = 20;

//   function inner() {
//     console.log(x); // 20
//   }

//   inner();
// }

// outer();

//Q2
// function outer() {
//   let x = 0;

//   return function () {
//     return ++x; //->x+1
//   };
// }

// const a = outer(); //New FEC
// const b = outer(); //New FEC

// console.log(a()); //1
// console.log(b()); //1
// console.log(a()); //2
// console.log(b()); //2

//Q3
// function outer() {
//   let x = 1;

//   return function () {
//     return x++ + ++x;
//   };
// }

// const fn = outer();

// console.log(fn()); // 4
// console.log(fn()); //10

//Q4
// let x = 1;

// function test() {
//   return x++ + x++ + ++x;
// }

// console.log(test()); //9

//Q5
// function outer() {
//   let x = 0;

//   return function () {
//     console.log(x); //0, 1
//     return x++ + ++x;
//   };
// }

// const fn = outer();

// console.log(fn()); //0, 2
// console.log(fn()); //2, 6

//Q6
// var x = 1;

// function outer() {
//   console.log(x); //undefined

//   var x = 2;

//   return function () {
//     console.log(x);
//   };
// }

// const fn = outer();
// fn(); //undefined, 2

//Q7
// let x = 1;

// function test() {
//   return ++x + x++ + x; //2+2+3 = 7
// }

// console.log(test()); //7

//Q8
// function outer() {
//   let x = 1;

//   return function () {
//     console.log(x++); //1, 3
//     return x++ + ++x; //2+4 => x=4, 4+6=10 =>x=6
//   };
// }

// const fn = outer();

// console.log(fn()); //1, 6
// console.log(fn()); //4, 12

//Q9
// let ab = 1;

// function a() {
//   let x = 2;

//   return function b() {
//     return x++ + ++x; //2+4=6 x=>4
//   };
// }

// const fn1 = a();
// const fn2 = a();

// console.log(fn1()); //6
// console.log(fn2()); //6
// console.log(fn1()); //10

// function outer() {
//   let x = 1;

//   return function () {
//     return x++ + ++x + x++; //1 + 3 + 3 => x=4   //4+6+6 => x=7
//   };
// }

// const fn = outer();

// console.log(fn()); //7
// console.log(fn()); //16

// Review of Day 1
//Q1
// console.log(a);

// var a = 5;

// function test() {
//   console.log(a);
//   var a = 10;
// }

// test();

//Q2
// var x = 10;

// function outer() {
//   function inner() {
//     console.log(x);
//   }

//   var x = 20;

//   inner();
// }

// outer();

// Q3
// function outer() {
//   let x = 1;

//   return function () {
//     return x++;
//   };
// }

// const a = outer();
// const b = outer();

// console.log(a()); //1
// console.log(a()); //2
// console.log(b()); //1
// console.log(a()); //3

// Q4
// function test() {
//   let x = 0;

//   console.log(x); //0
//   return x++;
// }

// console.log(test()); //0

// Q5
// function outer() {
//   let x = 1;

//   return function () {
//     x += 1;
//     return function () {
//       return x++;
//     };
//   };
// }

// const fn = outer();

// const a = fn();
// const b = fn();

// console.log(a()); //3 x=>4
// console.log(b()); //4 x=>5
// console.log(a()); //4 x=>5

// Q6
// var x = 1;
// function outer() {
//   console.log(x); //undefined

//   var x = 2;

//   return function () {
//     console.log(x); //2
//   };
// }

// const fn = outer();
// fn();

// Q7
// let x = 1;
// function test() {
//   return x++ + ++x + x++ + x; //1+3+3+4
// }

// console.log(test()); //1+3+3+4=11 x=>4

// Q8
// function outer() {
//   let x = 1;

//   return function () {
//     return x++ + ++x + x++; //1+3+3 x=>4
//   };
// }

// const fn = outer();

// console.log(fn()); // 1+3+3=7 x=>4
// console.log(fn()); //4+6+6=16 x=>7

// Q9
// function create() {
//   let x = 0;

//   return function () {
//     return ++x;
//   };
// }

// const a = create();
// const b = create();

// console.log(a()); //1
// console.log(b()); //1
// console.log(a()); //2
// console.log(b()); //2
// console.log(a()); //3

// Q10
// var x = 5;

// function outer() {
//   console.log(x);

//   var x = 10;

//    return function inner() {
//     console.log(x++);
//     // no return statement
//   };
// }

// const fn1 = outer(); //undefined
// const fn2 = outer(); //undefined

// fn1(); //undefined, undefined
// fn1(); //10,
// fn2();

// Q11
// function outer() {
//   let x = 0;

//   return function () {
//     x++;

//     return function () {
//       return x;
//     };
//   };
// }

// const fn = outer();

// const a = fn(); // 0 => x=1
// const b = fn(); // 1 => x=2

// console.log(a()); //2
// console.log(b()); //2
// console.log(a()); //2

// Q12
// function test() {
//   let x = 1;

//   return x++ + x++ + ++x;
// }

// console.log(test()); //1+2+4=7

//Q13
// function outer() {
//   let x = 1;

//   return function () {
//     return ++x;
//   };
// }

// const a = outer();
// const b = outer();

// console.log(a()); //2
// console.log(a()); //3
// console.log(b()); //2
// console.log(a()); //4

// Q14
// function outer() {
//   let x = 1;

//   return function () {
//     return x++ + ++x; //1+3 =>x=3
//   };
// }

// const a = outer();
// const b = outer();

// console.log(a()); //4 x=3
// console.log(b()); //4 x=3
// console.log(a()); //8 x=5

// Q10 Review
// var x = 5;

// function outer() {
//   console.log(x);

//   var x = 10;

//   return function inner() {
//     console.log(x++);
//   };
// }

// const fn1 = outer(); //undefined x=10
// const fn2 = outer(); //undefined x=10

// fn1(); //10 =>x=11
// fn1(); //11 =>x=12
// fn2(); //10

// //Output
// //undefined
// //undefined
// //10
// //11
// //10

