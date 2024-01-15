function Product(n, p){
    this.name = n;
    this.price = p;
    this.display = () =>{
        console.log(this.name, this.price);
    }
}

let x = new Product("iphone", 50000);
console.log("x");
x.display();
console.log(x);

function Product1(n, p){
    this.name = n;
    this.price = p;
}

let x1 = new Product("iphone", 50000);
Product.prototype.display = () =>{
    console.log(this.name, this.price);
}
console.log("x1");
x1.display();
console.log(x1);