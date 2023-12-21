var add = (function exce() {
  let counter = 0;
  console.log(counter);
  return function process() {
    counter += 1;
    console.log(counter);
    return counter;
  };
})();

add();
add();
add();

/**
 * Here what happens that first time when add is called then function exce is called, which initialises the counter as 1
 */
