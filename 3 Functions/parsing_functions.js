function fun() {
  console.log("fun called");
}

function gun(fu) {
  console.log("gun called");
  fu();
  console.log("gun left");
}

gun(fun);
/**
 * In JS, we can parse functions as an argument to another function
 */
