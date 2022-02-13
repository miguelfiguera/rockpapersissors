/*
alert("Welcome to rock, paper, scissors, lizzard or spock.");
alert("Please read your Console-Log on the left panel, there you will have further instructions.")
console.log("Humanity is in the verge of extintion... we are fighting the Borgs");
console.log("No body knows why, but they have decided to play this game to define who rules the earth.")
console.log("So, our future depends on you...");
console.log("To play, run the command: 'game()' on the console and begin...");
console.log("if you do not know the rules, you may type 'rules()'on the console for an explanation...")
console.log("for the list of commands just tipe 'help()'.")
console.log("So, go on mon capitane, lets defeat the borgs in this final battle!");*/

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


function comparingResults(playerScore, roundCount, computerScore) { 
    computerPlay();
    let computerSelection = computerPlay();  
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
    let message7 = "you have ten rounds, the first team to get to 5 points wins the game.";
    let message8 = "The fate of the humans is on your hands, good luck, mon capitane";
    console.log (message1);
    console.log(message2);
    console.log(message3);
    console.log(message4);
    console.log(message5);
    console.log(message6);
    console.log(message7);
    console.log(message8);
    theTextLog0.innerText= message1
    theTextLog1.innerText= message2
    theTextLog2.innerText= message3
    theTextLog3.innerText= message4
    theTextLog4.innerText= message5
    theTextLog5.innerText= message6
    theTextLog6.innerText= message7
    theTextLog7.innerText= message8
    
}

/*function tenRounds() {
    do{
    game();
    console.log( "Your score is " + playerScore + " vs " + "computer's score " + computerScore + "."); 
} while( 
    (playerScore != 5 && computerScore < 5)||
    (computerScore != 5 && playerScore< 5) ||
    (roundCount >=10 && playerScore===computerScore));
 }*/
function reset() { 
    playerScore = 0;
    roundCount = 0;
    computerScore = 0;
    theTextLog0.innerText="Now player score is " + playerScore + ". Computer's Score is " + computerScore + ". And the round count is " + roundCount + ".";
    theTextLog1.innerText="";
    theTextLog2.innerText="";
    theTextLog3.innerText="";
    theTextLog4.innerText="";
    theTextLog5.innerText="";
    theTextLog6.innerText="";
    theTextLog7.innerText="";
    console.log(  "Now player score is " + playerScore + ". Computer's Score is " + computerScore + ". And the round count is " + roundCount + ".");
}

function help() {
    let message1="game plays one round of this game.";
    let message2= "reset puts the score and the rounds on 0 again.";
    let message4= "rules opens an explanation of how to play 'Rock, Paper, Scissors, Lizzard and Spock.";
    let message5= "You can use suddenDeath to define everything in just one round...";
    console.log(message1);
    console.log(message2);
    console.log(message4);
    console.log(message5);   
    theTextLog0.innerText = message1;
    theTextLog1.innerText= message2;
    theTextLog3.innerText= message4;
    theTextLog4.innerText =message5;
    theTextLog2.innerText="";
    theTextLog7.innerText="";
    theTextLog5.innerText="";
    theTextLog6.innerText="";
}
function suddenDeath() { 
    computerScore = 4;
    roundCount= 7;
    playerScore= 4;
    theTextLog0.innerText="Now player score is " + playerScore + ". Computer's Score is " + computerScore + ". And the round count is " + roundCount + ".";
    theTextLog1.innerText="";
    theTextLog2.innerText="";
    theTextLog3.innerText="";
    theTextLog4.innerText="";
    theTextLog5.innerText="";
    theTextLog6.innerText="";
    console.log(  "Now player score is " + playerScore + ". Computer's Score is " + computerScore + ". And the round count is " + roundCount + ".");
    do { game();
     } while( 
        (playerScore != 5 && computerScore < 5)||
        (computerScore != 5 && playerScore< 5));
}
// Here starts the event, style and form using javascript. 

//Styling const:
const BACKGROUNDCOLOR = "#201c1c";

//Header 
document.getElementsByClassName("header");
let header = document.getElementsByClassName("header");
let h1 = document.createElement ("h1");
header[0].appendChild(h1);
h1.innerText = "Rock, Paper, Scissors, Lizzard and Spock.";
h1.style.color = "white";
h1.style.textAlign = "center";
h1.style.fontFamily = "Atari"; //working on this

//right panel: "commands"

document.getElementsByClassName("other-commands");
let rightPanel= document.getElementsByClassName("other-commands");
let rightPanelTitle= document.createElement("h4");
rightPanelTitle.innerText= "COMMANDS";
rightPanelTitle.style.color= "white";
rightPanelTitle.style.textAlign="center";
let innerDivRightPanel = document.createElement("div");
let buttonHelp= document.createElement ("button");
let buttonSuddenDeath = document.createElement ("button");
let buttonRules= document.createElement("button");
let buttonReset = document.createElement ("button");
buttonHelp.innerText = "Help";
buttonSuddenDeath.innerText= "Sudden Death";
buttonRules.innerText = "Rules";
buttonReset.innerText = "Reset";
rightPanel[0].appendChild(rightPanelTitle);
innerDivRightPanel.appendChild(buttonHelp);
innerDivRightPanel.appendChild(buttonSuddenDeath);
innerDivRightPanel.appendChild(buttonRules);
innerDivRightPanel.appendChild(buttonReset);
rightPanel[0].appendChild(innerDivRightPanel);
rightPanel[0].style.display= "flex";
rightPanel[0].style.flexDirection= "column";
rightPanel[0].style.justifyContent = "center";
innerDivRightPanel.style.display= "flex";
innerDivRightPanel.style.flexDirection = "column";
innerDivRightPanel.style.flexWrap= "wrap";
innerDivRightPanel.style.justifyContent = "space-evenly";
innerDivRightPanel.style.height = "300px";
innerDivRightPanel.style.width = "250px";
innerDivRightPanel.style.alignContent = "center";
innerDivRightPanel.style.alignSelf = "center";
rightPanelTitle.style.marginTop= "10px";
rightPanelTitle.style.marginBottom= "0px";
rightPanelTitle.style.border="0px";


//Left panel: Dashboard Messages:
let leftPanel=document.getElementsByClassName("messages");
let h4=document.createElement ("h4");
let innerDivLeftPanel=document.createElement ("div");
let textDiv=document.createElement("div");
let theTextLog0= document.createElement("p");
let theTextLog1= document.createElement("p");
let theTextLog2= document.createElement("p");
let theTextLog3= document.createElement("p");
let theTextLog4= document.createElement("p");
let theTextLog5= document.createElement("p");
let theTextLog6= document.createElement("p");
let theTextLog7= document.createElement("p");
h4.innerText="CONSOLE-LOG";
h4.style.color = "white";
h4.style.textAlign= "center";
leftPanel[0].appendChild(innerDivLeftPanel);
innerDivLeftPanel.appendChild(h4);
innerDivLeftPanel.appendChild(textDiv);
textDiv.appendChild(theTextLog0);
textDiv.appendChild(theTextLog1);
textDiv.appendChild(theTextLog2);
textDiv.appendChild(theTextLog3);
textDiv.appendChild(theTextLog4);
textDiv.appendChild(theTextLog5);
textDiv.appendChild(theTextLog6);
textDiv.appendChild(theTextLog7);
textDiv.style.color = "white";
textDiv.style.textAlign = "center";
textDiv.style.overflowY = "scroll";
textDiv.style.maxHeight= "400px";
//I need to display the help and rule messages on the textDiv.

// Battlefield...

let battlefield= document.getElementsByClassName("battlefield");
let battlefieldDiv=document.createElement ("div");
let yourScoreCont= document.createElement ("p");
let computerScoreCont= document.createElement("p");
let pcOptionsSquare = document.createElement("div");
let playerOptionsSquare = document.createElement("div");
let billboard=document.createElement ("h3");
battlefieldDiv.style.display = "flex";
battlefieldDiv.appendChild(computerScoreCont);
battlefieldDiv.appendChild(yourScoreCont);
battlefieldDiv.appendChild(playerOptionsSquare);
battlefieldDiv.appendChild(pcOptionsSquare);
battlefield[0].appendChild(battlefieldDiv);
battlefield[0].appendChild(billboard);
battlefield[0].style.display = "flex";
battlefield[0].style.flexDirection = "row";
battlefield[0].style.flexWrap = "wrap";
battlefield[0].style.justifyContent = "center";
billboard.innerText = "Choose your weapon!";
billboard.style.color = "white";
billboard.style.flexBasis= "500px";
billboard.style.maxHeight="100px";
billboard.style.order= "1";
billboard.style.textAlign= "center";
battlefieldDiv.style.display = "flex";
battlefieldDiv.style.flexDirection = "row";
battlefieldDiv.style.flexWrap = "wrap";
battlefieldDiv.style.order= "2";
yourScoreCont.innerText = "Your Score is: " + playerScore;
computerScoreCont.innerText = "Borg's Score is: " + computerScore;
battlefieldDiv.style.color = "white";
battlefieldDiv.style.alignContent= "center";
battlefieldDiv.style.justifyContent= "space-evenly";
yourScoreCont.style.height= "100px";
computerScoreCont.style.height = "100px";
pcOptionsSquare.style.width = "250px";
pcOptionsSquare.style.height= "250px";
pcOptionsSquare.style.borderRadius = "25px";
pcOptionsSquare.style.border= "2px";
pcOptionsSquare.style.borderStyle = "solid";
pcOptionsSquare.style.margin= "10px";
playerOptionsSquare.style.width = "250px";
playerOptionsSquare.style.height = "250px";
playerOptionsSquare.style.border= "2px";
playerOptionsSquare.style.borderRadius = "25px";
playerOptionsSquare.style.borderStyle = "solid";
playerOptionsSquare.style.margin = "10px";
//layout of the battlefield
pcOptionsSquare.style.order = "2";
playerOptionsSquare.style.order = "1";
yourScoreCont.style.order = "3";
computerScoreCont.style.order = "4";


//Options panel:
let optionsPanel = document.getElementsByClassName("options");
let optionsDiv = document.getElementsByClassName("the");
let rock = optionsDiv[0];
let paper = optionsDiv[1];
let spock= optionsDiv[4];
let scissors= optionsDiv[2];
let lizzard = optionsDiv[3];
let spockButton= document.createElement("button");
let rockButton=document.createElement("button");
let lizzardButton=document.createElement("button");
let paperButton=document.createElement("button");
let scissorsButton=document.createElement("button");
spockButton.innerText = "Spock";
lizzardButton.innerText = "Lizzard";
paperButton.innerText = "Paper";
scissorsButton.innerText = "Scissors";
rockButton.innerText="Rock";
rock.appendChild(rockButton);
paper.appendChild(paperButton);
scissors.appendChild(scissorsButton);
spock.appendChild(spockButton);
lizzard.appendChild(lizzardButton); 
optionsPanel[0].style.display = "flex";
optionsPanel[0].style.justifyContent ="space-evenly";
spockButton.style.width= "150px";
spockButton.style.height= "100px";
rockButton.style.width= "150px";
rockButton.style.height= "100px";
paperButton.style.width= "150px";
paperButton.style.height= "100px";
lizzardButton.style.width= "150px";
lizzardButton.style.height= "100px";
scissorsButton.style.width= "150px";
scissorsButton.style.height= "100px";
rockButton.style.borderRadius = "25px";
spockButton.style.borderRadius = "25px";
paperButton.style.borderRadius = "25px";
lizzardButton.style.borderRadius = "25px";
scissorsButton.style.borderRadius = "25px";
optionsDiv[0].style.margin = "20px";
optionsDiv[1].style.margin = "20px";
optionsDiv[2].style.margin = "20px";
optionsDiv[3].style.margin = "20px";
optionsDiv[4].style.margin = "20px";


//footer
document.getElementsByClassName("footer");
let footer= document.getElementsByClassName ("footer");
let h5 = document.createElement ("h5");
footer[0].appendChild(h5);
h5.innerText = "Copyright: Captain Perrosaurio 2022.";
h5.style.color = "white";
h5.style.textAlign = "center";

//button Options Panel functions
spockButton.onclick = () => {playerSelection="SPOCK"; game();}
rockButton.onclick = () => {playerSelection="ROCK"; game();}
lizzardButton.onclick = () => {playerSelection="LIZZARD"; game();}
paperButton.onclick = () => {playerSelection="PAPER"; game();}
scissorsButton.onclick = () => {playerSelection="SCISSORS"; game();}


//buttons Right Panel
buttonHelp.onclick = () => {help();}
buttonReset.onclick = () => {reset();}
buttonRules.onclick = () => {rules();}
buttonSuddenDeath.onclick = () => {suddenDeath();}