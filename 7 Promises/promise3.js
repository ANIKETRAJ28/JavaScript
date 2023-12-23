/**
 * when do we consider a promise fulfuilled?
 * -> if we call resolve() function, we consider it fulfilled.
 * -> we consider it rejected if we call reject()
 */

function demo(val){
  return new Promise(function(resolve, reject){
    console.log("Promise execured");
    setTimeout(function process(){
      console.log("completed timer");
      if(val %2 == 0){
        // even resolved
        resolve("Even");
      } else{
        // odd reject
        reject("Odd");
      }
      console.log("Promise exit");
    }, 3000);
  });
}

let x = demo(2);
console.log(x); // will give fulfilled in thw promise object.