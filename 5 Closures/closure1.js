function todo(task) {
  console.log("start of todo");
  setTimeout(function fun() {
    console.log("completed", task);
  }, 2000);
  console.log("end of todo");
}

console.log("Starting");
todo("assignment");
console.log("ending");
/**
 * In this program Starting will be printed, then todo function will be called. In which "start of todo" will be printed.
 * At the time instance when function fun() will be called, then todo function is already over (because it is asynchronous function which will be executed after 2 sec).
 * If fun() is called after the completion of the todo, and todo has ended then how is it able to access task variable?
 * Here what happens that todo is called and is over i.e it is free from the callstack means its instance in the callstack is over.
 * So how is it posiible that fun accesses the task which is a variable of todo function()?
 *
 * This happens due to closure.
 * Closure is when a function "remembers" it's lexical scope even when the function is executed outside that lexical scope.
 */
