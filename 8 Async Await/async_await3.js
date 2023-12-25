async function fun(){
    console.log("entered");
    let x = await 20;
    console.log("exit");
    return x;
}

console.log("start");
let val = fun();
val.then(function f(value){
    console.log("value is", value);
});
console.log("stop");