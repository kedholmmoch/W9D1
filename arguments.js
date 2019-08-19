// function argSum() {
//   let args = Array.prototype.slice.call(arguments);
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// function restSum(...args) {
//   args.reduce((acc, el) => {
//     return acc += el;
//   });
// }

// Function.prototype.myBind = function(ctx, ...bindArgs) {
//   let that = this;
//   return function (...callTimeArgs) {
//     let args = bindArgs.concat(callTimeArgs);
//     that.apply(ctx, args);
//   } 
// };


function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => {
        return acc += el;
      });
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const sum = curriedSum(4);
sum(5)(30)(20)(1); // => 56