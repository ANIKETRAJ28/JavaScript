function todo(task) {
  console.log("starting todo");
  setTimeout(function fun() {
    console.log("completed", task);
  }, 5000);
  task = "dayanand";
  console.log("ending todo");
}
console.log("starting");
todo("assignment");
console.log("ending");
/**
 * Here starting will be printed, then todo will be called with task as assignment.
 * In the todo function "starting todo" will be printed then setTimeout() function will be called which will be executed after 5 sec.
 * Meanwhile task will be changed from "assignment" to "dayanand" and "ending todo" will be printed and the function todo will be removed from callstack and ending will be printed.
 * After 5sec setTimeout will be executed which prints "completed" (task).
 * And the task was a part of todo function, but todo function is removed from the callstack.
 * But a function setTimeout() will remember the instance of the variable task, this phenomenan is called closure.
 * So, "completed dayanand" will be printed
 */
