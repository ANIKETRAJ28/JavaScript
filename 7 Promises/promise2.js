/**
 * Promise --> Promise is a special type of JS object.
 * How JS works behind the scene?
 * 
 * The Promise object which we create has 4 major properties.
 * 1. Staus/ State
 * 2. Value
 * 3. Onfulfillment
 * 4. Onreject
 * 
 * 
 * Status/ State -> Shows current promise status
 *                  1. Pendng  2. Fulfilled(success)  3. Rejected(error)
 * 
 * Value -> When state of the promise is pending the value property is undefined. The moment promis is resolverd(state- fulfilled), the value property is upadted from undefined to new value.
 * (this value can be considered as return value/ resolve value).
 * So, the value property acts like a placeholder till the time promise finishes.
 * 
 * Outfulfillment -> This is an array which contains function that we attach to our promise object.
 * (To a promise object we can attach some functions using .then() method).
 * When the value property is updated from undefined to the new value, JS gives chance to these attached functions one by one with the value property as their argument.
 * (if there is no piece of code left in "their callstack" and global code left).
 */


/**
 * How to create a Promise object?
 * 
 * new Promise(function (resolve, reject) {
 *   // task
 * });
 * 
 * Promise() is the Promise constructor and it accepts a callback function.
 * This callback function (function (resolve, reject)) should have 2 arguments(functions) resolve and reject.
 * Then in this returned statement(which is a promise object) we write our logic/ task
 * If we want to return something as success, then call resolve function with whatever value you want to return.
 * 
 * eg.
 * new Promise(function (resolve, reject) {
 *   // task
 * let data = "res";
 * resolve(data); // to retuern someting sucessful
 * });
 */

/**
 * Executing the previous code via promise
 */

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("starting fetching from", url);
    // task
    setTimeout(function process() {
      let data = "dummy data";
      console.log("completed fetching the data");
      // somehow we need to return the response ?
      resolve(data);
    }, 4000);
  });
}

let x = fetchData("www.google.com");
console.log(x);