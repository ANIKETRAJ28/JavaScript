function Product(n, p){
    this.name = n;
    this.price = p;
    this.display = function(){
        console.log(this.name, this.price);
    }
}

const prod1 = new Product("iphone", 50000);

const obj = function(a, b){
    console.log(a+b);
    console.log(this.display());
}

// obj();

const Boundobj = obj.bind(prod1, 1, 2);

Boundobj();
