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
            reject(result);
        }, 5000);
    });
}

let x = fetchData("www.google.com")
.then(function processDownload(value){
    return writeData(value);
})
.then(function processUpload(value){
    return uploadFile("www.google.com", value);
})
.then(function finish(data){
    console.log("done", data);
}, function error(err){
    console.log("error catched", err);
});

/**
 * When we see the documentation, then we weill se that the .then() function takes two argument functions.
 * The 1st function is for resolve and the 2nd function is for error.
 * .then(function finish(succ){}, function error(err){});
 */