function process() {
  console.log("start");
  setTimeout(function exec() {
    console.log("executed task");
  }, 3000);
  for (let i = 0; i < 10000000000; i++) {}
  console.log("end");
}
process();
