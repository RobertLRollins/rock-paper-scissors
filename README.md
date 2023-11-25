# rock-paper-scissors

## Pseudocode

* COMPUTE(function) the computers randomly selected choice of 'Rock', 'Paper', or 'Scissors'
  * INITIALIZE the choices
  * RETURN the randomly selected result

* GET the player to choose 'Rock', 'Paper', or 'Scissors'
  * MAKE case-insensitive
  * RETURN the result

* DETERMINE(function) round winner by "playing a round"
  * IF player picked 'Rock' & computer picked 'Scissors'
    * OR player picked 'Scissor' & computer picked 'Paper'
    * OR player picked 'Paper' & computer picked 'Rock'
      * RETURN "You Win! player pick beats computer pick"
  * Else If player picked 'Scissors' & computer picked 'Rock'
    * OR player picked 'Paper' & computer picked 'Scissors'
    * OR player picked 'Rock' & computer picked 'Paper'
      * RETURN "You Lose! computer pick beats player pick"
  * Else
    * RETURN "It's a tie. You both picked computer pick"
  * ENDIF

* INITIALIZE the players selection
  * CALL "the players choice"
* INITIALIZE the computers selection
  * CALL "the computers choice"
* PRINT a string that declares the winner of the round
  * INPUT "the players choice"
  * INPUT "the players choice"

* WHILE the player OR the computer has won less the 3 games
  * DETERMINE round winner by "playing a round"
    * IF the player scores
      * INCREMENT the players score
    * ELSEIF the computer scores
      * INCREMENT the computers score
    * ELSE do nothing
* ENDWHILE