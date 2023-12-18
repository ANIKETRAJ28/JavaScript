var teacher = "sanket";
function fun() {
  var teacher = "pulkit";
  console.log(teacher, teachingAsistant); // undeclared teachingAssistant
  teachingAsistant = "vibhav"; // autoglobal
}

function gun() {
  console.log(subject); // undefined subject
  var subject = "JS";
  console.log(subject);
  console.log(teacher);
}

console.log(teacher);
// fun(); // will give error
gun();

/**
 * undefined vs undeclared
 * Undefined is a variable state when the scope already know about it but in the execution phase we have not allocated it a value.
 * Undeclared is a variable state when we never formally declared a variable and before assigning.
 */
