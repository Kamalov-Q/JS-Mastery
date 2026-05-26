// Counter app with closures
function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment(step = 1) {
      count += step;
      return count;
    },

    decrement(step = 1) {
      count -= step;
      return count;
    },

    reset() {
      count = initialValue;
      return count;
    },

    getValue() {
      return count;
    },
  };
}

// Usage
const counter = createCounter(0);
console.log(counter.increment()); //1
console.log(counter.increment(5)); //6
console.log(counter.decrement(2)); //4
console.log(counter.getValue()); //4
console.log(counter.reset()); //0
console.log(counter.getValue()); //0
