//Rock paper sissors:
//define variables
//define functions mini: playerinput / computerinput / compare selection / show message
//0) the game starts...
//1) Players input an option.
//2) Computer selects an option.
//3) compares both of the variables.
//4) Determines which is greater than the other.
//5) shows a message of victory, draw or loss.
let playerScore = 0
let computerScore= 0
let roundCount = 0


function computerPlay() {
    let selection = Math.floor(Math.random()*3);
    switch (selection) {
        case 0 :
            return "ROCK"
        case 1:
            return "PAPER"
        case 3: 
            return "SCISSORS"
    }
}

function playerPlay () {
    let options = prompt ("Choose your weapon! (rock, paper or scissors).");
    return options.toUpperCase();
}

let computerSelection = computerPlay();
let playerSelection = playerPlay();

function  gameRound(playerSelection,computerSelection) {

    if (playerSelection === computerSelection) {alert("Tie game!");

}   else if (
    (playerSelection==="ROCK" && computerSelection==="SCISSORS") || 
    (playerSelection==="SCISSORS" && computerSelection==="PAPER") ||
    (playerSelection==="PAPER" && computerSelection==="ROCK" )
){
    alert("You won this round.");
    roundCount++;
    playerScore++;
    return computerScore, playerScore;
}
    else if (
    (computerSelection==="ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection=== "PAPER" && playerSelection === "ROCK") 
    ){
        alert("Computer won this round (shame on your cow)");
        roundCount++;
        computerScore++;
        return computerScore, playerScore;
    }
}
function endGame() {
    if (roundCount === 10 && playerScore===computerScore) {
        alert("Tie game");
    }
    else if (roundCount === 10 && playerScore>computerScore) {
        alert("You won, you sick fuck, YOU WON!");
    }
    else if ( roundCount === 10 && computerScore>playerScore) {
        alert("Shame on your cow, game over for you...defeated by a pc... what a loser...");
    }
}