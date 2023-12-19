let arr = [1, 2, 3, 4, 5];
/**
 * arr.map is the function which expects a callback function.
 * And this function accepts 2 values (value and index).
 * For all the elements of the given array, it parses the elements as an argument to the callback.
 */
let x = arr.map(function process(v, i) {
  // this returns the new array
  // v -> value
  // i -> index
  console.log(v, i);
  return v * v; // here we are returning the square of the values as new elements in the new array which is returned. If we don't return then it will return the array of same length but with undefined as the elements.
});

console.log(x);
console.log(arr);
