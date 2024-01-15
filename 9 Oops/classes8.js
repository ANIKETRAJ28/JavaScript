function Product(n, p){
    this.name = n;
    this.price = p;
    this.display = function(){
        console.log(this.name, this.price);
    }
}

const prod1 = new Product("iphone", 50000);

function obj(a,b){
    console.log(a+b);
    this.display();
}

obj.apply(prod1,[4,6]);
