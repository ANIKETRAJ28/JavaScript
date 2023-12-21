/**
 * 1. Write a function to download data from a url.
 * 2. Write a function to save that download data into a file and retuen the filename.
 * 3. Write a function to upload that file written in previous step to a new-url.
 */

//1 ->
function fetchCustom(url, fn) {
  // we are mimicing the function
  // download content of the url
  // this downlaoding can take some time
  // we will download the content from url, and then whatever is the result, we will pass to the callback
  console.log("starting downlaod ", url);
  setTimeout(function process() {
    let response = "dummy data";
    fn(response);
    console.log("downloading completed");
  }, 3000);
}

// 2 ->
function writeFile(data, fn) {
  // code snippet of writing the file
  console.log("started writing ", data);
  setTimeout(function process() {
    let filename = "output.txt";
    fn(filename);
  }, 5000);
}

// 3 ->
function uploadFile(filename, url, fn) {
  // code snippet for uploading the file
  console.log("upload started");
  setTimeout(function process() {
    console.log("file", filename, "upladed sucessfully on", url);
    let uploadRes = "SUCCESS";
    fn(uploadRes);
    console.log("upload ended");
  }, 8000);
}

fetchCustom("www.google.com", function fun(response) {
  // here we fetched the file url
  console.log("fetched", response);
  //   now we will write in the file
  writeFile(response, function write(writeResponse) {
    console.log("wrote ", writeResponse);
    // now we want to uplaod the file
    uploadFile(writeResponse, response, function upload(uploadRes) {
      console.log("upload", uploadRes);
    });
  });
});
