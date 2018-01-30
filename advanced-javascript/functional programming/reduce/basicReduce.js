// Usage of Array.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const order = [
  {amount: 50},
  {amount: 100},
  {amount: 50},
  {amount: 299}
];

// arr.reduce(callback[, initialValue])
// callback ( accumulator, currentValue, currentIndex [optional], array [optional])

const initialValue = 0;

const total = order.reduce((accumulator, currentOrder) => {
  console.log(accumulator, currentOrder);
  return accumulator + currentOrder.amount;
}, initialValue);

// Shorter version 
// const total = order.reduce((sum, order) => sum + order.amount, 0);

console.log('Total:',total, '$');
/* will output :
0 { amount: 50 }
50 { amount: 100 }
150 { amount: 50 }
200 { amount: 299 }
Total: 499 $
*/