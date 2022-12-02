//Q1 : print the marks of a student in an object using for loop

const marks = {
    sakshi : 98,
    dhiru : 89,
    niki : 95,
    kaustu : 85
}

// console.log(Object.keys(marks));

for(let i = 0; i < Object.keys(marks).length; i++) {
    console.log("Marks of", Object.keys(marks)[i], "are", marks[Object.keys(marks)[i]]);
}

// //Q2 : Solve Q1 using for in loop
for(key in marks) {
    console.log("Marks of", key, "are", marks[key]);
}

// //Q3 : print "Try again" until the user enters the correct number
const prompt = require("prompt-sync")()
let cnum = 45;
let inum = prompt("Guess the number: ")

while(inum != cnum){
    console.log("Try again");
    inum = prompt();
}

console.log("You have guessed the correct number!");


//Q4 : Write a function to find mean of 5 numbers

const mean = (a, b, c, d, e) => {
    return avg = ((a + b + c + d + e) / 5 );
}

console.log("The average of five numbers is: ", mean(4, 5, 6, 7, 8));