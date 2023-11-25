function getRandom(arr) {
    return arr[Math.floor (Math.random() * arr.length)];
}

function capitalizeFirstLetter(str) {
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
}

function getComputerChoice() {
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    return getRandom(choices);
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return capitalizeFirstLetter(choice);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Scissors" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Rock") {
            return "You W"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" 
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Rock" && computerSelection === "Paper") {
        return "You L"
    } 
}

let playerScore = 0;
let computerScore = 0;

while (playerScore < 3 && computerScore < 3) {

    let playerSelection = getPlayerChoice();

    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        console.log("Invalid Input");
        continue;
    }

    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    
    if (roundResult === "You W") {
        playerScore++
        console.log("You won the round! " + playerSelection + " beats " + computerSelection);
    } else if (roundResult === "You L") {
        computerScore++
        console.log("You lost the round! " + computerSelection + " beats " + playerSelection);
    } else {
        console.log("The round is a tie. You both picked " + computerSelection);
    }
}

if (playerScore === 3) {
    console.log("YOU WON THE GAME! ");

}
if (computerScore === 3) {
    console.log("YOU LOST THE GAME!");
}

console.log("Refresh browser to play again!")