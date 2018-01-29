// Practising Closures in JS in ES6
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// Example with add
// It takes an argument (x) and returns a function which takes another argument (y), and finally sum x & y
const createAdder = x => {
  return y => x + y;
};

const add3 = createAdder(3); // x = 3

console.log(add3(5)); // y = 5, so the result is 3+5 = 8