//Generating a Random number between 1 to 100

let randomNum = Math.floor(Math.random() * (100 - 1) + 1)
console.log(randomNum);

const prompt = require("prompt-sync")();
let userInput;
do{
    userInput = prompt("Guess the number: ");

    if(userInput > randomNum)
        console.log("The guessed number is greater");
    
    else if( userInput < randomNum)
        console.log("The guessed number is lesser");

    else if(randomNum == userInput)
        console.log("You have guessed the correct number");
}while(randomNum != userInput)

// if (randomNum == userInput) {
//     console.log("You have a correct guess");
// }