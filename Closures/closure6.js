let add = (function exce() {
  let counter = 0;
  return function process() {
    counter += 1;
    console.log(counter);
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
