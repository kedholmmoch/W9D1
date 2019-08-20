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

Function.prototype.curry = function(numArgs) {
  let args = [];
  let _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function addShit(...nums) {
  return nums.reduce( (acc, el) => acc += el);
}

add3 = addShit.curry(3);
add3(2)(3)(4);

