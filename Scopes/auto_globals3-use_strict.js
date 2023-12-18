// "use strict";
function fun() {
  teachingAssistant = "jd";
  console.log(teachingAssistant);
}
fun();
/**
 * "use strict" is used to avoide creating of the autoglobals.
 * It is declared at the top of any scope.
 * Using it at the top of the code will resut in not creating of autoglobals in that scope.
 * Whereas if we declare the "use strict" in a function it will resut in not creating of autoglobal in taht particular function scope
 */

function gun() {
  //   "use strict"; // will give error
  teacher = "td";
  ("use strict"); // not give error
  console.log(teacher);
}

gun();

{
  // ("use strict"); // doesnot works in block scope
  course = "js";
  console.log(course);
}
