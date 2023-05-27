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
const choices = ["rock", "paper", "scissors"];

body.style.cssText = "display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px;";
buttonContainer.style.cssText = "display: flex; gap: 24px;"
selectionContainer.style.cssText = "display: flex; gap: 32px; justify-content: space-evenly; align-items: center; border: 3px solid black; width: 600px; height: 150px; font-size: 32px;"
scoreContainer.style.cssText = "display: flex; flex-direction: column; align-items: center;"

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
roundResult.textContent = "Current Round Winner is ";
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
buttons.forEach(button => button.addEventListener('click', main));

function main(e) { //runs everytime its click
    if (playerScore < 5 && computerScore < 5) {
        const playerSelection = e.target.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        
        pSelection.textContent = playerSelection.toUpperCase();
        cSelection.textContent = computerSelection.toUpperCase();

        const result = playRound(playerSelection, computerSelection);
        updateScore(result); //update the score
        roundResult.textContent = `Current Round Winner is ${result}`;
        checkTally();
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

function updateScore(result) {
    if (result === "You") {
        playerScore++;
        pScore.textContent = `Your score: ${playerScore}`; 
    }
    else if (result === "Computer") {
        computerScore++;
        cScore.textContent = `Computer score: ${computerScore}`;
    }
}

function checkTally() {
    if (playerScore >= 5) {
        //winner
        winner("Player Win!!!");
    }
    else if (computerScore >= 5) {
        //winner
        winner("You Lose:(");
    }
}

function playRound(player, computer) {
    let result = '';
    if (player == "rock") {
        if (computer == "rock") result = "Tie Round";
        else if (computer == "paper") result = "Computer";
        else result = "You";
    }
    else if (player == "paper") {
        if (computer == "rock") result = "You";
        else if (computer == "paper") result = "Tie Round";
        else result = "Computer";
    }
    else {//player is scissors
        if (computer == "rock") result = "Computer";
        else if (computer == "paper") result = "You";
        else result = "Tie Round"
    }
    
    return result;
}

function winner(w) {
    const container = document.createElement('div');
    const announcement = document.createElement('p');
    container.classList.add('reset');
    announcement.classList.add('reset');

    container.style.cssText = "border: 5px solid black; padding: 32px;";
    announcement.style.cssText = "font-size: 30px;";

    announcement.textContent = w;

    container.appendChild(announcement);
    body.appendChild(container);

    container.addEventListener('click', reset);
}

function reset() {
    //clear all score
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = `Your score: `;
    cScore.textContent = `Computer score: `; 
    pSelection.textContent = '';
    cSelection.textContent = '';
    roundResult.textContent = `Current Round Winner is `;
    const container = document.querySelector('div.reset');
    const announcement = document.querySelector('p.reset');
    container.removeEventListener('click', reset);
    container.removeChild(announcement);
    container.remove();

}


