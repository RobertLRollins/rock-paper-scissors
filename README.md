# rock-paper-scissors

## Pseudocode

* COMPUTE the computers randomly selected choice of 'Rock', 'Paper', or 'Scissors' FUNCTION getComputerChoice()
  * INITIALIZE choices
  * RETURN random result from choices

* GET the player to choose 'Rock', 'Paper', or 'Scissors'
  * MAKE case-insensitive
  * RETURN the result

* DETERMINE winner FUNCTION playRound(playerSelection, computerSelection)
  * IF player picked 'Rock' & computer picked 'Scissors'
    * OR player picked 'Scissor' & computer picked 'Paper'
    * OR player picked 'Paper' & computer picked 'Rock'
      * RETURN "You W"
  * ELSEIF player picked 'Scissors' & computer picked 'Rock'
    * OR player picked 'Paper' & computer picked 'Scissors'
    * OR player picked 'Rock' & computer picked 'Paper'
      * RETURN "You L"
  * ENDIF

* INITIALIZE roundResult
* INITIALIZE playerScore = 0
* INITIALIZE computerScore = 0

* WHILE the player AND the computer have won less the 3 games
  * INITIALIZE playerSelection = CALL getPlayerChoice()
  * IF playerSelection != 'Rock', 'Paper', or 'Scissors'
    * SKIPITERATION
  * INITIALIZE computerSelection = CALL getComputerChoice()
  * SET roundResult = CALL playRound( playerSelection, computerSelection )
    * IF the player scores
      * INCREMENT the players score
      * PRINT "You Win! player pick beats computer pick"
    * ELSEIF the computer scores
      * INCREMENT the computers score
      * PRINT "You Lose! computer pick beats player pick"
    * ELSE
      * PRINT "It's a tie. You both picked computer pick"
* ENDWHILE

* IF the player won
  * PRINT winner message
* ENDIF

* IF the computer won
  * PRINT loser message
* ENDIF

* PRINT refresh to play again