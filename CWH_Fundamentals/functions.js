const prompt = require("prompt-sync")();

// function simpleInt(principle, rate, time) {
//     var finalAmt=principle + principle*time*rate;
//     return finalAmt; 
//   }
  
//   console.log(simpleInt(20000,5,2)) 
//   console.log(simpleInt(150000,25,1))


let digiNum = prompt("Enter the number to be divided by 2: ");
digiNum = Number.parseInt(digiNum);

const dividedByTwo = (num) => {
    console.log("csdjcnjsdn", num);
    return num/2;
}

let answer = dividedByTwo(digiNum);
console.log(answer);