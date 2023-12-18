// var teacher = "sanket";
// function fun() {
//   console.log(subject); // undefined
//   var teacher = "pulkit";
//   var subject = "javascript";
//   teacherassistent = "vibhav";
//   console.log(teacher);
//   console.log(teacherassistent);
// }

// fun();
// console.log(teacher);
// console.log(teacherassistent);

var teacher = "sanket";
function fun() {
  console.log(subject); // undefined
  console.log(teacher); // undefined -> in function scope it will be declared and will be undefined printed
  var teacher = "pulkit";
  var subject = "javascript";
  teacherassistent = "vibhav";
  console.log(teacher);
  console.log(teacherassistent);
}

fun();
console.log(teacher);
console.log(teacherassistent);
