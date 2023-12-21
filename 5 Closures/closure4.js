function fun(task1, task2) {
  task1 = "paras";
  setTimeout(function gun() {
    console.log("completed", task1);
  }, 2000);
  task1 = task2;
  task2 = "assign";
}
fun("12", "34");
