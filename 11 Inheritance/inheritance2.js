class Category{
    constructor(c){
        this.categoryName = c;
    }
    getCategoryName(){
        console.log(this.categoryName);
    }
}

class Product extends Category{
    constructor(n, p, c){
        super(c);
        this.name = n;
        this.price = p;
    }

    display(){
        console.log("details of product are");
        console.log(this.name);
        console.log(this.price);
        this.getCategoryName();
    }
}

let prod1 = new Product("iphone", 100000, "gadget");
prod1.display();
