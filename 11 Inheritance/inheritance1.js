function Product(n, p, c){
    this.name = n;
    this.price = p;
    Category.call(this, c);
}
function Category(c){
    this.categoryName = c;
    console.log(this.categoryName);
}
Category.prototype.getChategoryName = function(){
    console.log(this.categoryName);
}
Product.prototype = Object.create(Category.prototype);

let p = new Product("iphone", 100000, "gadget");
p.getChategoryName();
console.log(p.categoryName);
