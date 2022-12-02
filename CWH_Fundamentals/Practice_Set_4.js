//Q1 : what will be the length of Sting "Har\""

let str1 = "Har\"";
console.log(str1.length);

//Q2 : Includes, startswith and endswith String method examples in JavaScript

const sentence = "The quick brown fox jumps over the lazy frog";
const str2 = "fox";

console.log(`The word ${str2} ${sentence.includes(str2) ? 'is' : 'is not'} in the sentence`);

console.log(sentence.startsWith("The", "0"));   //true
console.log(sentence.startsWith("The", "3"));   //false

console.log(sentence.endsWith("frog"));    //true
console.log(sentence.endsWith("og"));    //true
console.log(sentence.endsWith("fr"));    //false

//Q3 : conver a string to lowercase

let upperString = "THIS is a loweRCASE STRING";
console.log(upperString.toLowerCase());

//Q4 : Extract the numeric value out of a String

let str3 = "This is a 1000 rupee note";
str3 = Number.parseInt(str3.slice(10, 15));
console.log(str3);
console.log(typeof(str3));

