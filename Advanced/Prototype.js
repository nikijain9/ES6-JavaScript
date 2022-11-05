// function Student() {
//     this.firstName = "Niki";
//     this.lastName = "Jain"
// }

// var S1 = new Student();
// // S1.age = 25;
// // console.log(S1.age);    //25

// var S2 = new Student();
// // console.log(S2.age);    //undefined

// Student.prototype.age = 30;
// console.log(S1.age);
// console.log(S2.age);

// function Students() {
//     this.name = 'John';
//     this.gender = 'M';
// }

// var studObj = new Students();

// console.log(Students.prototype); // object
// console.log(studObj.prototype); // undefined
// console.log(studObj.__proto__); // object

// console.log(typeof Students.prototype); // object
// console.log(typeof studObj.prototype); 
// console.log(typeof studObj.__proto__); // object

// console.log(Students.prototype === studObj.__proto__ ); // true

// function Student() {
//     this.name = 'John';
//     this.gender = 'M';
// }

// var studObj = new Student();

// Student.prototype.sayHi= function(){
//     alert("Hi");
// };

// var studObj1 = new Student();
// var proto = Object.getPrototypeOf(studObj1);  // returns Student's prototype object
            
// console.log(proto.constructor); // returns Student function 

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.sayHi = function(){
    console.log("Hiiiiiiiiiiiiiiii");
};

var studObj1 = new Student();
var studObj2 = new Student();
var studObj3 = new Student();

studObj1.sayHi();
studObj2.sayHi();
studObj3.sayHi();
