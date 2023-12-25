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

// async function procerssing(){
//     let downloadData1 = await fetchData("www.google.com");
//     let fileData1 = await writeData(downloadData1);
//     let uploadData1 = await uploadFile("www.google.drive.com", fileData1);
//     let downloadData2 = await fetchData("www.google.com");
//     let fileData2 = await writeData(downloadData2);
//     let uploadData2 = await uploadFile("www.google.drive.com", fileData2);
//     let downloadData3 = await fetchData("www.google.com");
//     let fileData3 = await writeData(downloadData3);
//     let uploadData3 = await uploadFile("www.google.drive.com", fileData3);
//     return true;
// }

// procerssing();

/**
 * Here it will be dufficult to see where's the compiling pointer go as there's so much of the await functions.
 * This is a kind of async await hell.
 * And for the other two downloads we'll no need to wait foe its download to be over.
 * So, we can club then into some seperate function
 */

async function processing1(){
    let downloadData = await fetchData("www.google.com");
    let fileData = await writeData(downloadData);
    let uploadData = await uploadFile("www.google.drive.com", fileData);
    // return uploadData;
}
async function processing2(){
    let downloadData = await fetchData("www.google.com");
    let fileData = await writeData(downloadData);
    let uploadData = await uploadFile("www.google.drive.com", fileData);
    // return uploadData;
}
async function processing3(){
    let downloadData = await fetchData("www.google.com");
    let fileData = await writeData(downloadData);
    let uploadData = await uploadFile("www.google.drive.com", fileData);
    // return uploadData;
}

console.log("start");
Promise.all([processing1(), processing2(), processing3()]).then(function process(value){
    console.log(value);
});

/**
 * Promise.all() is a function which will take an array of async functions and give result as the return type of the functions.
 * When we did all together then, we had to wait for the 1st task to be completed then we would get the result of 2nd and 3rd task.
 * But usin promise.all() will run all the 3 functions simultinously andall the functions are independent to themself.
 */