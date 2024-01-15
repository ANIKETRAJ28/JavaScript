var obj1 = {
    name: "sanket",
    company: "google",
    display: function (){
        console.log(this.name, this.company);
    }
};
var obj2 = {
    name: "sarthak",
    company: "phonepay",
    display: () => {
        console.log(this.name, this.display);
    }
};
var obj3 = {
    name: "sammer",
    company: "infosys",
    display: function(){
        let disp = () => {
            console.log(this.name, this.company);
        }
        disp();
    }
};
console.log("obj1");
obj1.display();
console.log("obj2");
obj2.display();
console.log("obj3");
obj3.display();
