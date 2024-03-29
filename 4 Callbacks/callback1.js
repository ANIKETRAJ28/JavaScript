function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

fun(10, function log() {
  console.log("log");
});
//  annonymous function example
function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

fun(20, function () {
  console.log("anonymous logger");
});

// passing aother function
function f() {
  console.log("logger");
}

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

fun(10, f);
