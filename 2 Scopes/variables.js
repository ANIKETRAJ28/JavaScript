function fun() {
  console.log(x); // why we get undefined? -> lexical scoping
  var x = 10;
  console.log(x);
}
{
  var y = 8; // becomes global due to var
}

console.log(y);

if (true) {
  var z = 30;
}
if (false) {
  var a = 20;
}

console.log(z);
console.log(a);
fun();

function f() {
  // console.log(r); // let declares the block scope so, it will give error
  let r = 10;
  console.log(r);
}
f();

// if we initialize a variable with let outside any block, then also it will not be accessible completely in the global scope, but if you do with var, it will be
// console.log(c); // will give error
let c = 10;
console.log(c);
console.log(d);
var d = 10;
console.log(d);
