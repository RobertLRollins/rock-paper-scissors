let playerScore = 0;
let computerScore = 0;
let finalResult = "First to 5 wins";
let result = "Chose your weapon";
document.getElementById('finalResult').innerHTML = finalResult
document.getElementById('result').innerHTML = result
document.getElementById('playerScore').innerHTML = playerScore
document.getElementById('computerScore').innerHTML = computerScore
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

let playerPlay= prompt('Enter Rock Paper or Scissors:','');
playerPlay = playerPlay.toLowerCase();

function playRound(playerSelection) {
    let computerSelection = computerPlay();

    for(;;){
        
        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'rock')) {
            
            playerScore += 1
            result = ('You win! ' + playerSelection + ' beats ' + computerSelection
                + " Player score: " + playerScore + " Computer score: " + computerScore)
                document.getElementById('result').innerHTML = result
                console.log(result);

            if (playerScore == 5) {
                document.getElementById('playerScore').innerHTML = playerScore
                finalResult = ' You won the game! Reload the page to play again'
                document.getElementById('finalResult').innerHTML = finalResult
                document.getElementById('result').innerHTML = result
                console.log(result);
                break
            }
        }
        else if (playerSelection == computerSelection) {
            result = ('It\'s a tie. You both chose ' + playerSelection
                + " Player score: " + playerScore + " Computer score: " + computerScore)
                document.getElementById('result').innerHTML = result
                console.log(result);
        }
        else {
            computerScore += 1
            result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
                + " Player score: " + playerScore + " Computer score: " + computerScore)
                console.log(result);
                document.getElementById('result').innerHTML = result

            if (computerScore == 5) {
                document.getElementById('computerScore').innerHTML = computerScore
                finalResult = ' I won the game! Reload the page to play again'
                document.getElementById('finalResult').innerHTML = finalResult
                document.getElementById('result').innerHTML = result
                console.log(result);
                break
            }
        }
        document.getElementById('playerScore').innerHTML = playerScore
        document.getElementById('computerScore').innerHTML = computerScore
        computerSelection = computerPlay();
        playerSelection = prompt('Enter Rock Paper or Scissors:','');
        playerSelection = playerSelection.toLowerCase();
        continue
        }
    }
playRound(playerPlay);