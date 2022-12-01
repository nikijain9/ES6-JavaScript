//Q1 : Use logical operators to find whether the age of the person lies between 10 and 20

const prompt=require("prompt-sync")({sigint:true}); 
// let age = prompt("What is the age of the person? ");

// if(age >= 10 && age <= 20){
//     console.log("Age lies between 10 and 20");
// }

// else
// console.log("Age does not lie between 10 and 20");

//Q2 : Demonstrate the use of Switch Case
// let grade = prompt("Enter you Grades: ");
// grade = Number.parseInt(grade);

// switch(grade) {
//     case "1":
//     console.log("You will be alloted to Section A");
//     break;

//     case "2":
//         console.log("You will be alloted to Section B");
//         break;

//     case "3":
//         console.log("You will be alloted to Section C");
//         break;
    
//     default:
//         console.log("You are not eligible to take Admission");
// }

//Q3 : Find whether a number is divisible by 2 and 3

// let number = prompt("Enter a number: ");
// number = Number.parseInt(number);

// if(number % 2 == 0 && number % 3 == 0 ){
//     console.log("Number is divisble by both 2 and 3");
// }

// else
//     console.log("Number is not divisble by both 2 and 3");


//Q4 : Find whether a number is divisible by 2 or 3

// let num = prompt("Enter the number of your choice: ");
// num = Number.parseInt(num);

// if (num % 2 == 0 ) {
//     console.log("The number is divisible by 2");
// }

// else if( num % 3 == 0){
//     console.log("The number is divisible by 3");
// }

// else{
//     console.log("The number is divisble neither by 2 nor by 3");
// }

// console.log(num % 2 == 0 ? "The number is divisible by 2" : "Not Divisible by 2");

//Q5 : Print "You can Drive" or "You cannot Drive" based on Age greate than 18 using Ternary Operator

let person_age = 20;
console.log(person_age >= 18 ? "You can drive" : "You cannot drive");