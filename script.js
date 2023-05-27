const body = document.querySelector('body');
const buttonContainer = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const selectionContainer = document.createElement('div');
const pSelection = document.createElement('p');
const cSelection = document.createElement('p');
const scoreContainer = document.createElement('div');
const roundResult = document.createElement('p');
const pScore = document.createElement('p');
const cScore = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

body.style.cssText = "display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px;";
buttonContainer.style.cssText = "display: flex; gap: 24px;"
selectionContainer.style.cssText = "display: flex; gap: 32px; justify-content: space-evenly; align-items: center; border: 3px solid black; width: 600px; height: 150px; font-size: 32px;"
scoreContainer.style.cssText = "display: flex; flex-direction: column; align-items: center;"

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
roundResult.textContent = "Current Round Winner: ";
pScore.textContent = "Your score: ";
cScore.textContent = "Opponent score: ";


rockBtn.classList.toggle('rock');
paperBtn.classList.toggle('paper');
scissorsBtn.classList.toggle('scissors');

buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorsBtn);
selectionContainer.appendChild(pSelection);
selectionContainer.appendChild(cSelection);
scoreContainer.appendChild(roundResult);
scoreContainer.appendChild(pScore);
scoreContainer.appendChild(cScore);
body.appendChild(buttonContainer);
body.appendChild(selectionContainer);
body.appendChild(scoreContainer);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
    
    const playerSelection = e.target.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    
    pSelection.textContent = playerSelection.toUpperCase();
    cSelection.textContent = computerSelection.toUpperCase();

    const result = playRound(playerSelection, computerSelection);
    checkResult(result); //update the score
    roundResult.textContent = "Current Round Winner: ";//reset round result content
    roundResult.textContent += result;
}))

function checkResult(result) {
    if (result === "You Win!") {
        playerScore++;
    }
    else if (result === "You Lose") {
        computerScore++;
    }
}
const choices = ["rock", "paper", "scissors"];
//let playerSelection;
//let computerSelection;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}
/*function getPlayerChoice() {
    let selection = prompt("Input rock, paper or scissors:");
    return checkPlayerSelection(selection); 
}*/
/*
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
}*/

function playRound(player, computer) {
    let result = '';
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
