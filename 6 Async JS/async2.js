function fun() {
  console.log("fun called");
  setTimeout(function exec() {
    console.log("inside the 5s timeout");
  }, 5000);
  setTimeout(function process() {
    console.log("inside 7s timeout");
  }, 7000);
}

fun();
for (let i = 0; i < 10000000; i++) {}
setTimeout(function last() {
  console.log("inside 0s timeout");
}, 0);

function fun() {
  console.log("fun called");
  setTimeout(function exec() {
    console.log("inside the 5s timeout");
  }, 5000);
  setTimeout(function process() {
    console.log("inside 7s timeout");
  }, 7000);
}

fun();
for (let i = 0; i < 10000000000; i++) {}
setTimeout(function last() {
  console.log("inside 0s timeout");
}, 0);

/**
 * In this example, the output will be->
 *  fun called
 * inside the 5s timeout
 * inside 0s timeout
 * inside 7s timeout
 * Because the for loop is quiet big due to which at execution time the 5s timer will be over and then the 0s setTimeout function will be called, then it will execute and atlast 7s will be executed.
 */
