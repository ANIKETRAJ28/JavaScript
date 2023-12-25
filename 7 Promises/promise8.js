function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("started downloading from", url);
        setTimeout(function processDownloading(){
            let data = "dummy data";
            console.log("download completed");
            reject(data);
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
            let err = "error";
            console.log("upload successful");
            // resolve(result);
            reject(err);
        }, 5000);
    });
}

let x = fetchData("www.google.com")
.then(function processDownload(value){
    return writeData(value);
}, function handleError(err){
    console.log("handled",err);
    return err;
})
.then(function processUpload(value){
    return uploadFile("www.google.com", value);
})
// .then(function finish(data){
//     console.log("done", data);
// }, function error(err){
//     console.log("error catched", err);
// });
.then(function finish(data){
    console.log("done", data);
})
.catch(function error(err){
    console.log("error catched", err);
})
.finally(function final(){
    console.log("finally executed if there's error or success");
});