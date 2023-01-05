//
//Syntax : 
//setTimeout(func|code, [delay], [arg1], [arg2], ...)
const prompt = require("prompt-sync")();

let a = setTimeout(() => {
    console.log("I am the first example of Set Timeout");
}, 3000);

let b = prompt("do you want to run the SetTimeout again?")

if( b == "n")
    clearTimeout(a);

// Another way

const sum = (a, b) => {
    console.log(`The sum of ${a} and ${b} is`, (a + b));
}

setTimeout(sum, 5000, 2, 3);

//SetInterval()
//syntax : setInterval(func|code, [delay], [arg1], [arg2], ...)

setInterval(() => {
    console.log("I am running at an interval of 3 seconds");
}, 3000);

const difference = (a, b) => {
    console.log(`The difference between ${a} and ${b} is `, (a-b));
}

let timeId = setInterval(difference, 2000, 5, 3);

//To stop further calls, we should call clearInterval(timerId).

setTimeout(() => {
    clearInterval(timeId);
    console.log("The execution of SetInterval is stopped after 5 seconds");
}, 5000);