# rock-paper-scissors

## Pseudocode

* COMPUTE a randomly selected choice of 'Rock', 'Paper', or 'Scissors' for
the computer
  * RETURN the result
* INPUT a player choice of 'Rock', 'Paper', or 'Scissors'
  * MAKE case-insensitive
  * RETURN the result
* INITIALIZE player selection, and computer selection
* COMPUTE the winner of the round
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
* DISPLAY a string that declares the OUTPUT
