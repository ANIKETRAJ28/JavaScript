function process() {
  console.log("start");
  setTimeout(function exec() {
    console.log("executed task");
  }, 3000);
  for (let i = 0; i < 10000000000; i++) {}
  console.log("end");
}
process();
/**
 * In the above example, the process() will be called then inside that "start" will be printed.
 * Then setTimeout function will be called, which will handled by the runtime.
 * Meanwhile below that for loop will execute, assume for loop takes much more time than setTimeout() function to be exected.
 * During that time, since the setTimeout() fucntion is executed, will be transfered to the event queue.
 * The event loop will check everytime if the condition is true or false i.e is the callstaack is empty or not and global tasks are done or not.
 * Once the for loop and the "end" is printed, then the callstack will be over, after that the event queue will pop the operations and the operatiosn will be shown.
 */
