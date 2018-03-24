class Human {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

var h1 =new  Human("van");
console.log(h1.getName());


class Man extends Human {
    constructor(a,b) {
        super(a,b);
    }
    getName() {
        console.log("In Man");
        console.log(super.getName());
    }
}
var man = new Man("Arm");
man.getName();