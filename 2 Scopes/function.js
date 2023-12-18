// In a function, the visibility of a variable/ function is just innside the outer function

var name = "sanket";
function greet() {
  console.log("greetings!", name);
}
function fun() {
  var x = 10;
  console.log("have fun", name);
  function test() {
    console.log("test", x);
  }
  test();
  console.log(x);
}

greet();
fun();
