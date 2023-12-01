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

let playerScore = 0;
let computerScore = 0;
let roundResult;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Scissors" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Rock") {
        roundResult = "You W"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" 
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Rock" && computerSelection === "Paper") {
        roundResult = "You L"
    } else {roundResult = "tie"}

    if (roundResult === "You W") {
        playerScore++
        console.log("You won the round! " + playerSelection + " beats " + computerSelection);
    } else if (roundResult === "You L") {
        computerScore++
        console.log("You lost the round! " + computerSelection + " beats " + playerSelection);
    } else {
        console.log("The round is a tie. You both picked " + computerSelection);
    }

    if (playerScore === 3) {
        console.log("YOU WON THE GAME! ");
        console.log("Refresh browser to play again!")
    }
    if (computerScore === 3) {
        console.log("YOU LOST THE GAME!");
        console.log("Refresh browser to play again!")
    }
    
}


let selectionMenu = document.querySelector('#selectionMenu');

selectionMenu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playerSelection = 'Rock';
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection)
            break;
        case 'paper':
            playerSelection = 'Paper';
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection)
            break;
        case 'scissors':
            playerSelection = 'Scissors';
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection)
            break;
    }
});
