function getRandom(arr) {
    return arr[Math.floor (Math.random() * arr.length)];
}

//Used for playing in the console
/*
function capitalizeFirstLetter(str) {
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return capitalizeFirstLetter(choice);
}
*/

function getComputerChoice() {
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    return getRandom(choices);
}



let playerScore = 0;
let computerScore = 0;
let roundCall;
let roundResult = 'Chose your weapon';
let finalResult = 'First to 3 wins';
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;
const roundResultDisplay = document.getElementById("roundResult");
roundResultDisplay.textContent = roundResult;
const finalResultDisplay = document.getElementById("finalResult");
finalResultDisplay.textContent = finalResult;

function playRound(playerSelection, computerSelection) {
    if (playerScore === 3 || computerScore === 3) {
        return;
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Scissors" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Rock") {
        roundCall = "You W"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" 
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Rock" && computerSelection === "Paper") {
        roundCall = "You L"
    } else {roundCall = "tie"}

    if (roundCall === "You W") {
        playerScore++
        playerScoreDisplay.textContent = playerScore;
        roundResult = "You won the round! " + playerSelection + " beats " + computerSelection;
        roundResultDisplay.textContent = roundResult;
    } else if (roundCall === "You L") {
        computerScore++
        computerScoreDisplay.textContent = computerScore;
        roundResult = "You lost the round! " + computerSelection + " beats " + playerSelection;
        roundResultDisplay.textContent = roundResult;
    } else {
        roundResult = "The round is a tie. You both picked " + computerSelection;
        roundResultDisplay.textContent = roundResult;
    }

    if (playerScore === 3) {
        finalResultDisplay.textContent = "YOU WON THE GAME! Refresh browser to play again!";
    }
    if (computerScore === 3) {
        finalResultDisplay.textContent = "YOU LOST THE GAME! Refresh browser to play again!";
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