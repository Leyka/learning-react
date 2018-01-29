// Currying is a process to reduce functions of more than one argument 
// to functions of one argument with the help of lambda calculus.
// https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400

const add = x => y => x + y;

const add3 = add(3);
console.log(add3) // => [Function]

const result = add3(5);

console.log(result === 8); // => true