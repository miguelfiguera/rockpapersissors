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

function  gameRound(playerSelection,computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerPlay() === computerPlay) {alert("Tie game!");
}   else if ((playerSelection==="ROCK" && computerSelection==="SCISSORS") || 
(playerSelection==="SCISSORS" && computerSelection==="PAPER") ||
(playerSelection==="PAPER" && computerSelection==="ROCK" )
){
    alert("You won this round.");
    roundCount++;
    playerScore +1;
    return computerScore, playerScore;
}
    else if (computerSelection==="ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection=== "PAPER" && playerSelection === "ROCK") 
    {
        alert("Computer won this round (shame on your cow)");
        roundCount++;
        computerScore + 1;
        return computerScore, playerScore;
    }
}
}