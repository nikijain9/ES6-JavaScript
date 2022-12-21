const prompt=require("prompt-sync")();

let user = prompt("Enter any one out of S, W, G\n");
let usersResponse = user.toUpperCase()
// console.log(usersResponse);

let machine = Math.floor(Math.random() * 3);
// console.log(machine);

let machineResponse = ["S", "W", "G"][machine];
// console.log("machineResponse", machine, machineResponse);

// S(user) compares W -> S
// S(user) compares G -> G

//W(user) compares S -> S
//W(user) compares G -> W

//G(user) compares S -> G
//G(user) compares W -> W

const match = (machineResponse, usersResponse) => {
    if(usersResponse === machineResponse)
        return "NoOne"

    else if(usersResponse === "S" & machineResponse === "W")
        return "User"
    
    else if(usersResponse === "S" & machineResponse === "G")
        return "Computer"

    else if(usersResponse === "W" & machineResponse === "S")
        return "Machine"
    
    else if(usersResponse === "W" & machineResponse === "W")
        return "User"

    else if(usersResponse === "G" & machineResponse === "S")
        return "User"

    else if(usersResponse === "G" & machineResponse === "W")
        return "Machine"
}

let result = match(machineResponse, usersResponse)
console.log(`User entered : ${usersResponse} \n Machine's Response : ${machineResponse} \nThe Winner is ${result.toUpperCase()}`);



