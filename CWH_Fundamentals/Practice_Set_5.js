//Q1 : create a number array and take input from the user to add new numbers to it. 
const prompt = require("prompt-sync")()
let num1 = [4, 6, 8, 9, 12, 15];

let inputNum = prompt("Enter the number to be added to array:")
inputNum = Number.parseInt(inputNum);

num1.push(inputNum);
console.log(num1);


//Q2 : keep adding numbers to the above array until 0 is added to the array
let i;

do{
    i = prompt("Enter the number: ");
    i = Number.parseInt(i);
    num1.push(i);
}while (i != 0)

console.log(num1);

//Q3 : filter for numbers divisible by 10 from an array

let num3 = [20, 56, 65, 90, 730, 45];

let filtered_arr = num3.filter((element) => {
    return element %  10 == 0;
})

console.log(filtered_arr);

//Q4 : Create an array  of square of given numbers

let num4 = [2, 4, 3, 7, 9, 12, 10, 11, 5];

let square_arr = num4.map((element) => {
    return element * element;
})

console.log(square_arr);

//Use reduce() to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to calculated)

let num5 = [1, 2, 3, 4, 5];

let factArr = num5.reduce((v1,v2) => {
    return v1 * v2;
})

console.log(factArr);