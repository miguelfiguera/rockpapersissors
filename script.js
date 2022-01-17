//Rock paper sissors:
//define variables
//define functions mini: playerinput / computerinput / compare selection / show message
//0) the game starts...
//1) Players input an option.
//2) Computer selects an option.
//3) compares both of the variables.
//4) Determines which is greater than the other.
//5) shows a message of victory, draw or loss.
alert("Welcome to rock, paper, scissors, lizzard or spock.");
alert("Please go to the console with ctrl+shift+C there you will have further instructions.")
console.log("Humanity is in the verge of extintion... we are fighting the Borgs");
console.log("No body knows why, but they have decided to play this game to define who rules the earth.")
console.log("So, our future depends on you...");
console.log("To play, run the command: 'game()' on the console and begin...");
console.log("if you do not know the rules, you may type 'rules()'on the console for an explanation...")
console.log("for the list of commands just tipe 'help()'.")
console.log("So, go on mon capitane, lets defeat the borgs in this final battle!");

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
    console.log ("You have choseen: " + playerSelection);
    console.log("The Borg have choseen: " + computerSelection);
    return "Your score is " + playerScore + " vs " + "computer's score " + computerScore + ".";
}

function endGame() {
    if (
        (roundCount === 10 && playerScore===computerScore)||
        (roundCount > 10 && playerScore===computerScore )) {
        alert("Tie game... one more");
        game();
    }
    else if(
        (roundCount === 10 && playerScore>computerScore) ||
        (playerScore === 5)||
        (roundCount >= 10 && playerScore>computerScore )) 
        {
        alert("You save the day captain. Live long and prosper.");
    }
    else if (
            ( roundCount === 10 && computerScore>playerScore) ||
            (computerScore===5)||
            ( roundCount >= 10 && computerScore>playerScore)) 
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
function rules() {
    let message1 = "The rules are simple: ";
    let message2 = "Rock smash scissors and crushes lizzard,";
    let message3 = "paper disproves spock and covers rock,";
    let message4 = "scissors decapitated lizzard and cut paper,";
    let message5 = "spock smashes scissors and fasers rock...";
    let message6 = "and lizzard poisons spock and eats paper...";
    let message7 = "you have ten rounds, the first team to get to 5 points wins the game";
    let message8 = "just type game() to begin, and good luck, mon capitane";
    console.log (message1);
    console.log(message2);
    console.log(message3);
    console.log(message4);
    console.log(message5);
    console.log(message6);
    console.log(message7);
    console.log(message8);
} 
/* Trying to do a loop until one of the "endgame happens"
function tenRounds() {
while (
    (roundCount != 10 && playerScore !=5) ||
    (roundCount != 10 && computerScore!=5)||
    (roundCount == 10 && playerScore===computerScore)) {
    game();
    console.log( "Your score is " + playerScore + " vs " + "computer's score " + computerScore + ".");
 }
}*/
function reset() { 
    playerScore = 0;
    roundCount = 0;
    computerScore = 0;
    console.log(  "Now player score is " + playerScore + ". Computer's Score is " + computerScore + ". And the round count is " + roundCount + ".");
}//in review cause it modifies the global variables at a local point.

function help() {
    let message1="game() plays one round of this game.";
    let message2= "reset() puts the score and the rounds on 0 again.";
    let message3= "tenRounds() plays all the rounds one after the other (for people in a hurry).";
    let message4= "rules() opens an explanation of how to play 'Rock, Paper, Scissors, Lizzard and Spock.";
    let message5= "You can use suddenDeath() to define everything in just one round...";
    console.log(message1);
    console.log(message2);
    console.log(message3);
    console.log(message4);
    console.log(message5);
}
function suddenDeath() { 
    computerScore = 4;
    roundCount= 7;
    playerScore= 4;
    console.log(  "Now player score is " + playerScore + ". Computer's Score is " + computerScore + ". And the round count is " + roundCount + ".");
    do { game();
     } while( 
        (playerScore != 5 && computerScore < 5)||
        (computerScore != 5 && playerScore< 5));
}//in review cause it modifies the global variables at a local point.