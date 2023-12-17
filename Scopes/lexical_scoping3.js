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
// console.log(teacherassistent); // will give error because we are trying to get the autoglobal before being assigned as global (it is made autoglobal in fun() function)
f();
console.log(teacher);
