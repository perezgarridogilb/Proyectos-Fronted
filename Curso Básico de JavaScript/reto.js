var player = "paper";
var machine = "scissors";

function game(player, machine) {
    if (player === machine) {
        console.log("It's a tie");
    }
    else if (player === "rock" && machine == "paper" || player === "paper" && machine === "scissors" ||
        player === "scissors" && machine === "rock") {
        console.log("Machine won!");
    }
    else if (player === "rock" && machine == "scissors" || player === "paper" && machine === "rock" ||
        player === "scissors" && machine === "paper") {
        console.log("Player won!");
    }
    else {
        console.log("Please enter a valid option");
    }
}

game(player, machine);