// Creates a function that invokes func with partials prepended to the arguments it receives.
const partial = (func, ...args) => {
  return (...otherArgs) => {
    return func(...args, ...otherArgs)
  }
};

const add = (x,y) => x+y;
// ...args = x = 3, and ...otherArgs = y = 2
const add3 = partial(add, 3);
console.log('add3', add3(2)); // => 5

// We can also use partial with the 'bind' function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
const partialWithBind = (func, ...args) => {
  return func.bind(null, ...args); // this = null, we won't bind 'this'
};

const subtract = (x,y) => y-x;
const sub2 = partialWithBind(subtract, 2);
console.log('sub2', sub2(6)); // => 4