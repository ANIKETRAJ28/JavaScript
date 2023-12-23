function fetch(url){
    return new Promise(function(resolve, reject){
        console.log("going to start the download", url);
        setTimeout(function process(){
            let data = "dummy data";
            console.log("download completed");
            resolve(data);
        }, 10000);
        console.log("timer to mimic download started");
    });
}

console.log("started the program");
console.log("we are expected to mimic a downlaoder");
x = fetch("www.google.com");
console.log("New Promise object created sucessfully, but downloading still going on");
// console.log(x);

/**
 * Promise is a synchronous process. as it a JS object and is mentioned in the official documentation and we studied in async JS topic that foe the inbuilt operations of JS JS works synchronously.
 * So, the Promise object will run syncronously.
 * 
 * So, analysing the execution ->
 * firstly the first 2 statements will be printed
 * console.log("started the program");
 * console.log("we are expected to mimic a downlaoder");
 * 
 * Then, function fetch will be called, in which the Promise object will be created
 * which will run the statement console.log("going to start the download", url);
 * Then the setTimeout() function will be executed via the runtime with the counter of 10sec.
 * Meanwhile the further tasks will be executed by the JS, so console.log("timer to mimic download started"); will be executed.
 * 
 * After the execution of the function fetch, console.log("New Promise object created sucessfully, but downloading still going on"); will be executed.
 * 
 * Once the callstack is empty and all the global code is over, then the setTimeout() function will execute console.log("download completed"); and resolve(data);
 */


// so te flow would be
/**
 * console.log("started the program");
 * console.log("we are expected to mimic a downlaoder");
 * console.log("going to start the download", url);
 * console.log("timer to mimic download started");
 * console.log("New Promise object created sucessfully, but downloading still going on");
 * console.log("download completed");
 * resolve(data);
 */