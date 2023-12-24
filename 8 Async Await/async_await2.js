function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("started downloading from", url);
        setTimeout(function processDownloading(){
            let data = "dummy data";
            console.log("download completed");
            resolve(data);
        }, 7000);
    });
}

async function processing(){
    console.log("entring processing");
    let value1 = await fetchData("www.youtube.com");
    console.log("youtube downloading completed");
    let value2 = await fetchData("www.google.com");
    console.log("google downlaoding completed");
    console.log("exiting processing");
    return value1 + value2;
}

console.log("start");
setTimeout(function timer1(){
    console.log("timer1");
}, 0);
console.log("after setting timer1");
let  x = processing();
x.then(function(value){
    console.log("finally processing promise resolves with", value);
});
setTimeout(function timer2(){
    console.log("timer2");
}, 1000);
setTimeout(function timer3(){
    console.log("timer3");
}, 0);
console.log("end");

// start
// after setting timer1
// entring processing
// started downloading from www.youtube.com
// end
// timer1
// timer3
// timer2
// download completed
// youtube downloading completed
// started downloading from www.google.com
// download completed
// google downlaoding completed
// exiting processing
// finally processing promise resolves with dummy datadummy data