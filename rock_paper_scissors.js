/* computerPlay() function randomly return rock paper or scissors */

function computerPlay(){
    const play = ["cRock", "cPaper", "cScissors"];

    const random = Math.floor(Math.random() * play.length);

    return play[random];
    //console.log(random, play[random]);
}
    console.log(computerPlay());

/* playerSelection(make sure this input is not case-sensative) and computerSelection 
parameters added to a function that plays a round of rock paper scissors and returns 
string declaring a winner: "You Win! Rock beats Scissors" use console.log() to display
the returned string. call this function playRound()*/

//playerSelection
let playerPlay = prompt("rock paper or scissors?");
function playerSelection(a){
    if (a == "rock"){
        return "pRock";
    }


}

console.log(playerSelection(playerPlay));





















/* Write a NEW function called game(). Use the previous function inside of this one 
to play a first to 5 game (learn to loop function) that keeps score and reports a winner 
or loser at the end. Use console.log() to display each rounds result and winner at the 
end. Use prompt to get user input. Feel free to re-work previous funtions/return values
and to create new "helper funtions*/