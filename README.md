# rock-paper-scissors

## Pseudocode

* FUNCTION getRandom(arr)
  * RETURN random selection from arr

* FUNCTION capitalizeFirstLetter(str)
  * SET str to lower case
  * SET first letter of str to upper case
  * RETURN str

* FUNCTION getComputerChoice()
  * INITIALIZE choices 'Rock', 'Paper', or 'Scissors'
  * RETURN random result from choices

* FUNCTION getPlayerChoice()
  * PROMPT 'Rock', 'Paper', or 'Scissors'
  * RETURN capitalized choice

* FUNCTION playRound(playerSelection, computerSelection)
  * IF playerSelection 'Rock' & computerSelection 'Scissors'
    * OR playerSelection 'Scissor' & computerSelection 'Paper'
    * OR playerSelection 'Paper' & computerSelection 'Rock'
      * RETURN "You W"
  * ELSEIF playerSelection 'Scissors' & computerSelection 'Rock'
    * OR playerSelection 'Paper' & computerSelection 'Scissors'
    * OR playerSelection 'Rock' & computerSelection 'Paper'
      * RETURN "You L"
  * ENDIF

* INITIALIZE playerScore = 0
* INITIALIZE computerScore = 0

* WHILE the player AND the computer have won less the 3 games
  * INITIALIZE playerSelection = CALL getPlayerChoice()
  * IF playerSelection != 'Rock', 'Paper', or 'Scissors'
    * SKIPITERATION
  * INITIALIZE computerSelection = CALL getComputerChoice()
  * INITIALIZE roundResult = CALL playRound( playerSelection, computerSelection )
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


# ToDo

* Rework pseudoode
* Add UI
* stop event listener when game is won/lost
* style UI

