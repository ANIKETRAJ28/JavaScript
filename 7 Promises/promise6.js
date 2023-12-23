function dummyProject(){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve("timer's promise");
        }, 10000);
    });
}
console.log("start of file");
setTimeout(function timer(){
    console.log("timer 1 done");
    let y = dummyProject();
    y.then(function promiseY(value){
        console.log("Who's promise??", value);
    });
}, 0);

let x = Promise.resolve("sanket's promsie");
x.then(function processPromise(value){
    console.log("whose promise??", value);
});
setTimeout(function timer2(){
    console.log("timer 2 done");
},0);
console.log("end of the file");

/**
 * In this piece of code what happens is that, firstly the [1]"start of file" will be printed, thenthe setTimeout() function will be managed by the runtime with 0ms as the time.
 * Then, x will be allocated as the resolve promise and in the next line x.then() function will be managed by the microtask queue.
 * Meanwhile the runtime will sent the setTimeout() function to the event queue.
 * In the next line the another setTimeout() function will be sent to the runtime with 0ms time.
 * The next line [2]"end of the file" will be executed, meanwhile the runtime will sent the setTimeout() function to the event queue.
 * 
 * Now, the event loop will check if the callstack is empty and all the global code is over then, the queue task will performed.
 * But now we have 2 queues(event queue and microtask queue) so, whoe's task would be performed first.
 * The microtask queue gets higher priority.
 * So, then first microtask queue task will perform. So, [3]"whose promise??", "sanket's promsie" will be performed.
 * After that the first setTimer() function will be executed. So, the code in the setTimeout() function will be sent to the runtime with 0ms and the .then method task will be set with 10s. And after that the second setTimeout() function will be executed.
 * So, it will be also sent to the runtime. Meanwhile the first setTimeout() function will be sent to the runtime queue but the .then() function is set to 10s so, it will take nmore time.
 * The first setTimeout() function will be executed and [4]"timer 1 done" will be primted. Meanwhile the second setTimeout() function will be sent to the runtime queue.
 * The task of the second setTiemout() will be executed first because the .then() method will be in progress.
 * So then the [5]"timer 2 done" will be printed. After that when the .then() method timeout will be over then the [6]"Who's promise??", "timer's promise" will be printed.
 */

/**
 * so, the output will be
 * start of file
 * end of the file
 * whose promise?? sanket's promsie
 * timer 1 done
 * timer 2 done
 * Who's promise?? timer's promise
 */

console.log("start of file");
setTimeout(function timer(){
    console.log("timer 1 done");
    let y = Promise.resolve("imediate resolve");
    y.then(function promiseY(value){
        console.log("Who's promise??", value);
    });
}, 0);

let x = Promise.resolve("sanket's promsie");
x.then(function processPromise(value){
    console.log("whose promise??", value);
});
setTimeout(function timer2(){
    console.log("timer 2 done");
},0);
console.log("end of the file");

/**
 * start of file
 * end of the file
 * whose promise?? sanket's promsie
 * timer 1 done
 * Who's promise?? imediate resolve
 * timer 2 done
 */