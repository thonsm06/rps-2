const body = document.querySelector('body');
const container = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

container.style.cssText = "display: flex; gap: 24px;"

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
//rockBtn.style.cssText 

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
body.appendChild(container);


const choices = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}
/*
function getPlayerChoice() {
    let selection = prompt("Input rock, paper or scissors:");
    return checkPlayerSelection(selection); 
}
*/
function checkPlayerSelection(selection) {
    selection = selection.toLowerCase();
    for(let i = 0; i < 3; i++)
    {
        if (selection === choices[i])
        {   
            return selection;
        }
    }
    return getPlayerChoice(); //rerun function until the correct input is receives
}

function playRound(player, computer) {
    let result;
    if (player == "rock") {
        if (computer == "rock") result = "Tie Round";
        else if (computer == "paper") result = "You Lose";
        else result = "You Win!";
    }
    else if (player == "paper") {
        if (computer == "rock") result = "You Win!";
        else if (computer == "paper") result = "Tie Round";
        else result = "You Lose";
    }
    else {//player is scissors
        if (computer == "rock") result = "You Lose";
        else if (computer == "paper") result = "You Win!";
        else result = "Tie Round"
    }
    
    return result;
}

function game(numberOfRound) {
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < numberOfRound; i++)
    {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();

        let string = playRound(playerSelection, computerSelection);
        if (string === "You Win!") {
            playerScore++;
        }
        else if (string === "You Lose") {
            computerScore++;
        }
    
        console.log("This is round " + (i + 1));
        console.log("Player choice: " + playerSelection);
        console.log("Computer choice: " + computerSelection);
        console.log(string);
        console.log("current score: " + playerScore + ", " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You beat the computer!")}
    else if (playerScore < computerScore) {
        console.log("You lose to the computer")}
    else console.log("You tie against the computer");

}
game(5);
