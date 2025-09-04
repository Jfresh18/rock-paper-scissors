let humanScore = 0;
let computerScore = 0;
const displayHumanScore = document.querySelector(".human-score");
const displayComputerScore = document.querySelector(".computer-score");
displayHumanScore.textContent = humanScore;
displayComputerScore.textContent = computerScore;
const container = document.querySelector("body");

function getComputerChoice() {
    randNum = Math.random();

    if (randNum <= 0.33) {
        return "rock";
    }
    else if (randNum <= 0.66) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

function restartGame() {
    const endScreen = document.querySelector(".end-screen");
    const results = document.querySelector("#results");
    humanScore = 0;
    computerScore = 0;
    results.textContent = "CHOOSE A MOVE TO BEGIN";
    endScreen.remove();
    
}

function displayEndScreen(msg) {
    const endScreen = document.createElement("div");
    endScreen.classList.add("end-screen");

    container.appendChild(endScreen);

    const endScreenWindow = document.createElement("div");
    endScreenWindow.classList.add("end-screen-window");
    endScreenWindow.textContent = msg;
    endScreen.appendChild(endScreenWindow);

    const endScreenScore = document.createElement("div");
    endScreenScore.classList.add("end-screen-score");
    endScreenWindow.appendChild(endScreenScore);

    const score1 = document.createElement("p");
    const score2 = document.createElement("p");
    score1.textContent = `Your Score: ${humanScore}`;
    score2.textContent = `CPU Score: ${computerScore}`;
    endScreenScore.appendChild(score1);
    endScreenScore.appendChild(score2);


    const endScreenButton = document.createElement("button");
    endScreenButton.classList.add("end-screen-button");
    endScreenButton.textContent = "Play Again";
    endScreenButton.addEventListener("click", restartGame);
    endScreenWindow.appendChild(endScreenButton);
}

function playRound(humanChoice, computerChoice) {
    let msg;
    const lossMsg = `You lose! ${computerChoice} beats ${humanChoice}`;
    const tieMsg = `It's a tie! ${computerChoice} is the same as ${humanChoice}`;
    const winMsg = `You Win! ${humanChoice} beats ${computerChoice}`;
    const results = document.querySelector("#results");

    if (humanChoice === computerChoice) {
        msg = tieMsg;
    } 
    else if ((humanChoice === 'rock' && computerChoice == 'paper') 
        || (humanChoice === 'scissors' && computerChoice == 'rock') 
        || (humanChoice === 'paper' && computerChoice == 'scissors')) {
            computerScore++;
            msg = lossMsg;
    }
    else {
        humanScore++;
        msg = winMsg;
    }

    if(humanScore >= 5) {
        msg = "YOU WON";
        
        displayEndScreen(msg);
        humanScore = 0;
        computerScore = 0;
        msg = "";

    }
    else if(computerScore >= 5) {
        msg = "YOU LOST";

        displayEndScreen(msg);
        humanScore = 0;
        computerScore = 0;
        msg = "";

    }

    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
    results.textContent = msg;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paperBtn.addEventListener("click",  () => {
    playRound("paper", getComputerChoice())
});
scissorsBtn.addEventListener("click",  () => {
    playRound("scissors", getComputerChoice())
});

