let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

let playerPlay= prompt('Enter Rock Paper or Scissors:','');
playerPlay = playerPlay.toLowerCase();

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result;

    for(;;){
        
        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'rock')) {
            
            playerScore += 1
            result = ('You win! ' + playerSelection + ' beats ' + computerSelection
                + " Player score: " + playerScore + " Computer score: " + computerScore)
                console.log(result);

            if (playerScore == 5) {
                result += ' You won the game! Reload the page to play again'
                console.log(result);
                break
            }
        }
        else if (playerSelection == computerSelection) {
            result = ('It\'s a tie. You both chose ' + playerSelection
                + " Player score: " + playerScore + " Computer score: " + computerScore)
                console.log(result);
        }
        else {
            computerScore += 1
            result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
                + " Player score: " + playerScore + " Computer score: " + computerScore)
                console.log(result);

            if (computerScore == 5) {
                result += ' I won the game! Reload the page to play again'
                console.log(result);
                break
            }
        }
        computerSelection = computerPlay();
        playerSelection = prompt('Enter Rock Paper or Scissors:','');
        playerSelection = playerSelection.toLowerCase();
        continue
        }
    }
playRound(playerPlay);