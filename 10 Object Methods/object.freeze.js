let obj = {
    x: 1, y: 2, z: 3
};
Object.freeze(obj);
obj.x = 5;
obj.a = 4;
console.log(obj);