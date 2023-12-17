var teacher = "sanket";
function f() {
  function fun() {
    console.log(subject); // undefined
    var teacher = "pulkit";
    var subject = "javascript";
    teacherassistent = "vibhav";
    console.log(teacher);
    console.log(teacherassistent);
  }
  fun();
  console.log(teacherassistent);
}
f();
console.log(teacher);
console.log(teacherassistent);
