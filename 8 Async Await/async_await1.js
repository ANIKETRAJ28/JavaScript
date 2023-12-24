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

async function procerssing(){
    let downloadData = await fetchData("www.google.com");
    console.log("download await is over");
    let fileData = await writeData(downloadData);
    console.log("write await is over");
    let uploadData = await uploadFile("www.google.drive.com", fileData);
    console.log("upload data is over");
    return true;
}

procerssing();