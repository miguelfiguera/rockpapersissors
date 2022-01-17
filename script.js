//Rock paper sissors:
//define variables
//define functions mini: playerinput / computerinput / compare selection / show message
//0) the game starts...
//1) Players input an option.
//2) Computer selects an option.
//3) compares both of the variables.
//4) Determines which is greater than the other.
//5) shows a message of victory, draw or loss.
alert("Welcome to rock, paper, scissors, lizzard or spock");
alert("Humanity is in the verge of extintion... we are fighting the Borgs");
alert("No body knows why, but they have decided to play this game to define who rules the earth.")
alert("So, our future depends on you...");
alert("To play, run the command: 'game()' on the console and begin... you have ten rounds... the first to get five points win...");
alert("So, go on, lets defeat the borgs in this final battle!");

let playerScore = 0;
let computerScore= 0;
let roundCount = 0;


function computerPlay() {
    let selection = Math.floor(Math.random()*5);
    switch (selection) {
        case 0 :
            return "ROCK"
        case 1:
            return "PAPER"
        case 2: 
            return "SCISSORS"
        case 3:
            return "SPOCK"
        case 4:
            return "LIZZARD"
    }
}

function playerPlay () {
    let options = prompt ("Choose your weapon! (rock, paper, scissors, lizzard or spock).");
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
        console.log("you won!");
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
        alert("We are one step closer to assimilated you...");
        console.log("You lose...this round.") 
    }
    else {
        roundCount++;
        alert("This is a draw...");
    }
    console.log("The Borg have choseen: " + computerSelection);
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
        alert("You save the day captain. Live long and prosper.");
    }
    else if (
            ( roundCount === 10 && computerScore>playerScore) ||
            (computerScore===5)) 
            {
        alert("The Borg now rule this world and they're gonna assimilated us... bip bop bip...resistance is futile...");
    }
    else { 
        roundsLeft = 10 - roundCount;
        console.log("You have " +roundsLeft + " rounds left, lets see who wins this game...");
    }
}
function game() {
    comparingResults();
    console.log("this is the round number " + roundCount); 
    endGame();
    return "Your score is " + playerScore + " vs " + "computer's score " + computerScore + ".";
}
function help() {
    let message1 = "The rules are simple: ";
    let message2 = "Rock beats scissors and lizzard,";
    let message3 = "paper beats spock and rock,";
    let message4 = "scissors beats lizzard and paper,";
    let message5 = "spock beats scissors and rock...";
    let message6 = "and lizzard poisons spock and eats paper...";
    console.log (message1);
    console.log(message2);
    console.log(message3);
    console.log(message4);
    console.log(message5);
    console.log(message6);
}