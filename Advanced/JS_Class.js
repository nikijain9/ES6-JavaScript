//Declaring a class Person
class Person {
    //instanciating properties of the class
    constructor(fName, lName) {
        this.firstname = fName;
        this.lastname = lName;
    }

    //creating a method within the class
    sayFullName() {
        return this.firstname + " " + this.lastname;
    }
}

//declaring another class which inherits the properties of the class Person

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName);

        this.age = 30;
    }

    //creating a method of the base class "SuperHero"

    power() {
        console.log("This Person is a SuperHero");
    }

}

var s1 = new SuperHero("Hanu", "Man");
console.log(s1.firstname);
console.log(s1.lastname);
console.log(s1.sayFullName());
console.log(`Age of this SuperHero is ${s1.age}`);
s1.power();


