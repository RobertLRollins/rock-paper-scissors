function getComputerChoice(){
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Scissors" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Rock") {
            return "You Win! " + playerSelection + " beats " + computerSelection
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" 
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! " + computerSelection + " beats " + playerSelection
    } else { return "It's a tie. You both picked " + computerSelection}
}

    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));