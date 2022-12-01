const prompt=require("prompt-sync")({sigint:true}); 
// import alert from 'alert'

let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  console.log("This is an invalid age");
}
else if(a<9){
  console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  console.log("You are a kid and you can think of driving after 18");
}
else{
  console.log("You can now drive as you are above 18");
}
console.log("Done")

console.log("You can", (a<18? "not drive" :"drive"))

//Switch Statements

let books = '100 pages';

switch(books)
{
    case '100 pages' : 
        console.log('A book of 100 pages costs 50rs');
    break;

    case '200 pages' : 
        console.log('A book of 200 pages costs 80rs');
    break;

    case '250 pages' : 
        console.log('A book of 250 pages costs 100rs');
    break;

    case '180 pages' : 
        console.log('A book of 200 pages costs 50rs');
    break;

    default: console.log(`Sorry, we do not have a book with ${books} at the moment`);
}