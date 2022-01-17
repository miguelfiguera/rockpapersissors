//Rock paper sissors:
//define variables
//define functions mini: playerinput / computerinput / compare selection / show message
//0) the game starts...
//1) Players input an option.
//2) Computer selects an option.
//3) compares both of the variables.
//4) Determines which is greater than the other.
//5) shows a message of victory, draw or loss.
alert("Welcome to rock,paper,scissors");
alert("Humanity is in the verge of extintion...");
alert("and army of machines wants to play with you 'rock, paper and scissors' as the winners gets full control of the world...");
alert("So, our future depends on you...");
alert("To play, run the command: 'gameRound()' on the console and begin... you have ten rounds... the first to get five points win...");
alert("So, go on you crazy fucker, we count on you!");

let playerScore = 0
let computerScore= 0
let roundCount = 0


function computerPlay() {
    let selection = Math.floor(Math.random()*5);
    switch (selection) {
        case 0 :
            return "ROCK"
        case 1:
            return "PAPER"
        case 3: 
            return "SCISSORS"
        case 4:
            return "SPOCK"
        case 5:
            return "LIZZARD"
    }
}

function playerPlay () {
    let options = prompt ("Choose your weapon! (rock, paper, scissors, lizard or spock).");
    return options.toUpperCase();
}


function comparingResults() { 
    computerPlay();
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    
    if (
        (playerSelection==="ROCK" && computerSelection==="SCISSORS")||
        (playerSelection=== "ROCK" && computerSelection=== "LIZZARD") || 
        (playerSelection==="SCISSORS" && computerSelection==="PAPER") ||
        (playerSelection=== "SCISSORS" && computerSelection=== "LIZZARD")||
        (playerSelection==="PAPER" && computerSelection==="SPOCK")||
        (playerSelection==="PAPER" && computerSelection==="ROCK" )||
        (playerSelection==="SPOCK" && computerSelection==="ROCK")||
        (playerSelection=== "SPOCK" && computerSelection==="SCISSORS")||
        (playerSelection==="LIZZARD" && computerSelection=== "SPOCK")||
        (playerSelection=== "LIZZARD" && computerSelection==="PAPER")
    ){ 
        roundCount++;
        playerScore++;
        alert("You won!");
}    
 else if (
    (computerSelection==="ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection==="ROCK" && playerSelection === "LIZZARD") ||
    (computerSelection==="SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection==="SCISSORS" && playerSelection === "LIZZARD") ||
    (computerSelection==="PAPER" && playerSelection === "ROCK") ||
    (computerSelection==="PAPER" && playerSelection === "SPOCK") ||
    (computerSelection==="LIZZARD" && playerSelection === "SPOCK") ||
    (computerSelection==="LIZZARD" && playerSelection === "PAPER") ||
    (computerSelection === "SPOCK" && playerSelection === "ROCK") ||
    (computerSelection=== "SPOCK" && playerSelection === "SCISSORS") 
    ){ 
        roundCount++;
        computerScore++;
        alert("Shame on your cow, you lose...") 
    }
    else {
        roundCount++;
        alert("This is a draw...");
    }
    return "Your score is " + playerScore + " vs " + "computer's score " + computerScore + ".";
}

function endGame() {
    if (roundCount === 10 && playerScore===computerScore) {
        alert("Tie game");
    }
    else if(
        (roundCount === 10 && playerScore>computerScore) ||
        (playerScore === 5)) 
        {
        alert("You won, you sick fuck, YOU WON!");
    }
    else if (
            ( roundCount === 10 && computerScore>playerScore) ||
            (computerScore===5)) 
            {
        alert("Shame on your cow, game over for you...defeated by a pc... what a loser...");
    }
    else { 
        roundsLeft = 10 - roundCount;
        console.log("You have " +roundsLeft + " of rounds left, lets see who wins this game...");
    }
}
function gameRound() {
    comparingResults();
    console.log("this is the round number " + roundCount); 
    endGame();
    return "Your score is " + playerScore + " vs " + "computer's score " + computerScore + ".";
}