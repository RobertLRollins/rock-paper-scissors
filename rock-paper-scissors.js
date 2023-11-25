function getComputerChoice(){
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    return choices[ Math.floor( Math.random()*choices.length ) ]; // returns a random selection
}

function playRound(playerSelection, computerSelection) {
    if ( playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Scissors" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Rock" ) {
            return "You W"
    } else if ( playerSelection === "Scissors" && computerSelection === "Rock" 
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Rock" && computerSelection === "Paper" ) {
        return "You L"
    } 
}

let roundResult;
let playerScore = 0;
let computerScore = 0;

while ( playerScore < 3 && computerScore < 3 ) {
    let playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    roundResult = playRound( playerSelection, computerSelection );
    if ( roundResult === "You W" ) {
        playerScore++
        console.log( "You won the round! " + playerSelection + " beats " + computerSelection )
    } else if ( roundResult === "You L" ) {
        computerScore++
        console.log( "You lost the round! " + computerSelection + " beats " + playerSelection )
    } else {
        console.log( "The round is a tie. You both picked " + computerSelection )
    }
}

if ( playerScore === 3 ) {
    console.log( "YOU WON THE GAME! " );

}
if (computerScore === 3) {
    console.log( "YOU LOST THE GAME!" );
}

console.log( "Refresh browser to play again!")