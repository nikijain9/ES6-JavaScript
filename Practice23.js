class Person {
    constructor(name) {
        console.log((name + " Person Constructor"));
    }

    getID() {
        return 10;
    }
}

class employee extends Person{
    constructor(name) {
        super(name);
        console.log(name + "  Employee Constructor");
    }

    getID() {
        return super.getID();
    }
}

let e = new employee("Nikita"); 

console.log(e.getID());


