function a(task) {
  return function b() {
    console.log(task);
  };
}

let x = a("sanket");
console.log(x);
for (let i = 0; i < 10000000000; i++) {}
x();
