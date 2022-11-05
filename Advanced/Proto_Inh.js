function Person(fName, lName) {
    this.FirstName = fName;
    this.LastName = lName;
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}

function Student(fName, lName, schoolName, grade) {
    Person.call(this, fName, lName);

    this.School = schoolName;
    this.Grade = grade;
}

Student.prototype = new Person();
Student.prototype = Person.prototype;

var s1 = new Student("Niki", "Jain", "CCTECH", 25);

console.log(s1.getFullName());
console.log(s1 instanceof Student);
console.log(s1 instanceof Person);
console.log(s1.FirstName);
console.log(s1.LastName);
console.log(s1.School);
console.log(s1.Grade);
