function Product(n, p){
    this.name = n;
    this.price = p;
    this.display = function(){
        console.log(this.name, this.price);
    }
}

let x = new Product("iphone", 50000);
x.display();
console.log(x);