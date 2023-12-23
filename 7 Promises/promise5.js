/**
 * 1. Write a function to download data from a url.
 * 2. Write a function to save that download data into a file and retuen the filename.
 * 3. Write a function to upload that file written in previous step to a new-url.
 */

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

function writeData(data){
    return new Promise(function(resolve, reject){
        console.log("started writing", data, "in the file");
        setTimeout(function processWriting(){
            let filename = "output.txt";
            console.log("file written sucessfully");
            resolve(filename);
        }, 3000);
    });
}

function uploadFile(url, file){
    return new Promise(function(resolve, reject){
        console.log("upload stared on url", url, "filename as", file);
        setTimeout(function processUpload(){
            let result = "success";
            console.log("upload successful");
            resolve(result);
        }, 5000);
    });
}

// let data = fetchData("www.google.com");
// let filename = writeData(data);
// let response = uploadFile(filename, "www.google.drive.com");

/**
 * started downloading from www.google.com
 * started writing Promise { <pending> } in the file
 * upload stared on url Promise { <pending> } filename as www.google.drive.com
 * file written sucessfully
 * upload successful
 * download completed
 * 
 * 
 * We'll get the output as the mentioned above i.e before download is completed the writing and upload will be executed because the setTimeout() will executed by the runtime.
 * So, how to resolve this problem?
 * What we technically want is that, when a promise gets resolved,we have to execute some function.
 * 
 * We can use .then() function on the promise object, to bimd the functions we want to execute once we fulfill a promise.
 * The .then() function takes callback function as an argument that we want to execute after promise is fulfilled, and the argument function takes value property as parameter.
 */

/**
 * The problem of inversion of control is resolved i.e only one task will be sent unlike in callback, we would pass multiple arguments, in this we can update the promise once only.
 * But the problem of callback hell is not over, we can see that there's also callback in each promise, so we need to do something.
 * So, we discussed about the .then() function that takes a callback function as an argument.
 * The .then() function will returns a promise and if that promise is fulfilled then the further code execution works.
 */

/**
 * let's analise the code
 * 
 * function fetchData(url){
 *  return new Promise(function(resolve, reject){
 *      console.log("started downloading from", url);
 *      setTimeout(function processDownloading(){
 *          let data = "dummy data";
 *          console.log("download completed");
 *          resolve(data);
 *      }, 7000);
 *  });
 * }
 * 
 * What happens is that, for function fetchData(url) -> the state of the promise here will be resolve.
 * So, the .then() function will execute if the state of the function is resolve. the .then() will accepts the result of the promise (resolve(data) data is the result).
 * And then for further .then() chains it will return a promise with state as fulfilled with the result as the value (we can manually set what value/ result we want to sent as argument for the next .then() functions).
 */

let x = fetchData("www.google.com")
.then(function processDownload(value){
    return writeData(value);
})
.then(function processUpload(value){
    return uploadFile("www.google.com", value);
})
.then(function finish(){
    console.log("done");
});

// console.log(x);