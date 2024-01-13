class Product{
    constructor(n, p){
        this.name = n;
        this.price = p;
    }
    displayProduct(){
        console.log(this.name, this.price);
    }

    buyProduct(){

    }
};

let iphone = new Product("iphone 11", 50000);
iphone.displayProduct();

