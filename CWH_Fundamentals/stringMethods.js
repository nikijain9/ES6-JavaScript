let firstName = "Nikita";

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

//to slice the String into parts

console.log(firstName.slice(2, 5)); //kit
console.log(firstName.slice(3));    //ita

//replace method
console.log(firstName.replace("Nik", "Nikk"));

//concatenate method
let lastName = "Jain";
console.log(firstName.concat(" ", lastName));

//trim
let friendName = "         Kanchan    ";
console.log(friendName);
console.log(friendName.trim());

//Practice
let newString = "Random";

for(let i = 0; i < newString.length; i++) {
    console.log(newString[i]);
}

console.log("------------------------------");
//OR

for(key of newString){
    console.log(key);
}