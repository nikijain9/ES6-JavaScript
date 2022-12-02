// for loop -> loops a block of code number of times
//for in loop -> loops through the keys of an object
//for of loop -> loops through the values of an object (iterables only)

const prompt = require("prompt-sync")();

let sum = 0;
let n = prompt("Enter the value of natural number to be summed: ");
n = Number.parseInt(n);

for(let i = 0; i < n; i++) {
    sum += (i + 1);
}

console.log("Sum of first ", n, "natural numbers is ", sum);

//for in loop 

let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}

for( let a in obj){
    console.log("Marks of", a, "is", obj[a]);
}

//for of loop

let obj2 = {
    fname : "Niki",
    lname : "Jain"
}

for (let b of "Nikita"){
    console.log(b);
}


//for loop to have table of a number
let table_number = prompt("Enter the number to attain the table of: ");
table_number = Number.parseInt(table_number);

for (let i = 1; i <= 10; i++) {
    console.log(table_number, "X" , i, "=", table_number*i);
}

