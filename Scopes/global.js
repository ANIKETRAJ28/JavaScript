// Global
// If a variable is present in global scope then it is accessible everywhere in the JS file.
// But how do we define a variable in global scope?
// There are many ways -- one of the way is to declare/ define variable outside any function or a block.

var name = "sanket";
function greet() {
  console.log("greetings!", name);
}
function fun() {
  console.log("have fun", name);
}

greet();
fun();
