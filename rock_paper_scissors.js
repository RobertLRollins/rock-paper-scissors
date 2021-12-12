/* computerPlay() function randomly return rock paper or scissors */
/* playerPlay(make sure this input is not case-sensative) and computerSelection 
parameters added to a function that plays a round of rock paper scissors and returns 
string declaring a winner: "You Win! Rock beats Scissors" use console.log() to display
the returned string. call this function playRound()*/



function computerPlay(){
    const cPlay = ["cRock", "cPaper", "cScissors"];
    const random = Math.floor(Math.random() * cPlay.length);
    return cPlay[random];
}
    

let playerPlay = prompt("rock paper or scissors?");
playerPlay = playerPlay.toLowerCase();



function playRound(pPlay,cPlay) {

    if (pPlay == "rock" & cPlay == "cRock") { return "Tie" }
    else if (pPlay == "rock" & cPlay == "cPaper") { return "You Lose! Paper beats Rock" }
    else if (pPlay == "rock" & cPlay == "cScissors") { return "You Win! Rock beats Scissors" }
    
    else if (pPlay == "paper" & cPlay == "cRock") { return "You Win! Paper beats Rock" }
    else if (pPlay == "paper" & cPlay == "cPaper") { return "Tie" }
    else if (pPlay == "paper" & cPlay == "cScissors") { return "You Lose! Scissors beats Paper" }
    
    else if (pPlay == "scissors" & cPlay == "cRock") { return "You Lose! Rock beats Scissors" }
    else if (pPlay == "scissors" & cPlay == "cPaper") { return "You Win! Scissors beats Paper" }
    else if (pPlay == "scissors" & cPlay == "cScissors") { return "Tie" }

    else return "You Lose! Invalid Input";
    }

    console.log(playRound(playerPlay, computerPlay()));

    playerPlay = prompt("rock paper or scissors?");
    playerPlay = playerPlay.toLowerCase();
    console.log(playRound(playerPlay, computerPlay()));

    playerPlay = prompt("rock paper or scissors?");
    playerPlay = playerPlay.toLowerCase();
    console.log(playRound(playerPlay, computerPlay()));

    playerPlay = prompt("rock paper or scissors?");
    playerPlay = playerPlay.toLowerCase();
    console.log(playRound(playerPlay, computerPlay()));
    
    playerPlay = prompt("rock paper or scissors?");
    playerPlay = playerPlay.toLowerCase();
    console.log(playRound(playerPlay, computerPlay()));
  
    








/* Write a NEW function called game(). Use the previous function inside of this one 
to play a first to 5 game (learn to loop function) that keeps score and reports a winner 
or loser at the end. Use console.log() to display each rounds result and winner at the 
end. Use prompt to get user input. Feel free to re-work previous funtions/return values
and to create new "helper funtions*/