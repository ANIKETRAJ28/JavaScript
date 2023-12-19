function mapper(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = fn(arr[i], i);
    result.push(res);
  }
  return result;
}

let arr = [1, 2, 3, 4, 5];
let x = mapper(arr, function cubic(v, i) {
  console.log(v, v * v * v, i);
  return v * v * v;
});
console.log(x, arr);
/**
 * Here, mapper function will be called. Under which arr -> array and we are creating a function expression cubic.
 * So, firstly mapper function will be called. In mapper function, we are iterating the whole array and calling the callback function which is cubic.
 * The cubic function will return the cube of v. The cube is stored in res, which is then pushed in the result array.
 * And similarly the loop continues, and the final cubic array will be stored in the variable x.
 */
