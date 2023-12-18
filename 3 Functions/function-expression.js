// // x(); will give error
// // because x is declared not initialized i.e from below line we can see x stores a function gun but while interpreting the compiler don't know if it is storing function or primitive type so it will give type error
// var x = function gun() {
//   console.log("gun");
// };

// x();

/**
 * function expressions are of 2 types
 * 1. annonymous function expression
 * 2. named function expression
 *
 * annonymous functions are hard to debug and recursion is also a bit tricky
 */
if (true) {
  (function (n) {
    return n <= 1 ? 1 : n * /*what comes here */ (n - 1);
  });
}

/**
 * Scope of function expression
 */
function fun() {
  // ----> code
}

var x = function gun() {
  //  ----> code
};

/**
 * In the above code of function fun() it has the global scope.
 * Whereas in the below code where x = function gun() here the function is in the scope of variable x.
 */
