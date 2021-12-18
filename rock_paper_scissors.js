let playerScore = 0
let computerScore = 0
let finalResult = "First to 5 wins";
let result = "Chose your weapon";
document.getElementById('finalResult').innerHTML = finalResult
document.getElementById('result').innerHTML = result
document.getElementById('playerScore').innerHTML = playerScore
document.getElementById('computerScore').innerHTML = computerScore
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        document.getElementById('playerScore').innerHTML = playerScore
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection)

        if (playerScore == 5) {
            finalResult = 'You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection)
    }
    else {
        computerScore += 1
        document.getElementById('computerScore').innerHTML = computerScore
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection)

        if (computerScore == 5) {
            finalResult = 'You lost the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    document.getElementById('finalResult').innerHTML = finalResult
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})