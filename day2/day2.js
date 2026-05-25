// Event Loop + Async JS + Micro/macro tasks 02.05.2026
// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// console.log("end");

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 1000);

// setTimeout(() => {
//   console.log("C");
// }, 0);

// console.log("D");

// //A, D, C, B

// console.log("start");

// setTimeout(() => console.log("timeout"));
// Promise.resolve().then(() => console.log("promise"));

// console.log("end");

// // start end promise timeout

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// setTimeout(() => console.log("D"), 0);

// console.log("E");
// // A E C B D

// console.log("start");

// setTimeout(() => console.log("timeout1"), 0);

// Promise.resolve()
//   .then(() => console.log("promise1"))
//   .then(() => console.log("promise2"));

// setTimeout(() => {
//   console.log("timeout2");
// }, 0);

// console.log("end");
// // start end promise1 promise2 timeout1 timeout2

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => {
//   console.log("C");
//   setTimeout(() => console.log("D"), 0);
// });

// Promise.resolve().then(() => console.log("E"));

// console.log("F");

// // A F C E B D

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => {
//   console.log("3");
//   Promise.resolve().then(() => console.log("4"));
// });

// console.log("5");
// // 1 5 3 4 2

// console.log("1");

// async function test() {
//   console.log("2");
//   await Promise.resolve();
//   console.log("3");
// }

// test();

// console.log("4");

// // 1 2 4 3

// console.log("start");

// async function test() {
//   console.log("1");

//   await Promise.resolve();

//   console.log("2");

//   await Promise.resolve();

//   console.log("3");
// }

// test();
// console.log("end");
// // start 1 end 2 3

console.log("1");

async function test() {
  console.log("2");

  await Promise.resolve();

  console.log("3");

  await Promise.resolve();

  console.log("4");
}

setTimeout(() => console.log("5"), 0);

test();

console.log("6");


// 1 6 2 5 3 4