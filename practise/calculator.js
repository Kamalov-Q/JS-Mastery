// Calculator using closures
function createCalculator(initialValue = 0) {
  let result = initialValue;

  const calculator = {
    add(num) {
      result += num;
      return calculator;
    },

    subtract(num) {
      result -= num;
      return calculator;
    },

    multiply(num) {
      result *= num;
      return calculator;
    },

    divide(num) {
      if (num === 0) throw new Error("Cannot divide by zero");
      result /= num;
      return calculator;
    },

    value() {
      return result;
    },

    reset() {
      result = initialValue;
      return calculator;
    },
  };

  return calculator;
}

//Usage
const calc = createCalculator(10);
const output = calc.add(5).multiply(2).subtract(4).divide(2).value();

console.log(output);
