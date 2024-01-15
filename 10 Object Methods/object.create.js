let obj = {
    x: 1, y: 2, z: 3
};
let anotherObj = obj;
anotherObj.x = 5;
let anotherObj1 = Object.create(obj);
anotherObj1.x = 10;
console.log(obj, anotherObj, anotherObj1); // the this pointer of the obj object and the anotherObj points to the same object. But the anotherObj1 has its own this pointer.
console.log(anotherObj1.y);