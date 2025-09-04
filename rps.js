

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

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    let msg;
    const lossMsg = `You lose! ${computerChoice} beats ${humanChoice}`;
    const tieMsg = `It's a tie! ${computerChoice} is the same as ${humanChoice}`;
    const winMsg = `You Win! ${humanChoice} beats ${computerChoice}`;
    const results = document.querySelector("#results");

    if (humanChoice === computerChoice) {
        humanScore++
        computerScore++
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
        msg = "YOU WIN THE GAME";
        humanScore = 0;
        computerScore = 0;
    }
    else if(humanScore >= 5) {
        msg = "YOU LOSE THE GAME";
        humanScore = 0;
        computerScore = 0;
    }

    results.textContent = msg;
    
    const displayHumanScore = document.querySelector(".human-score");
    const displayComputerScore = document.querySelector(".computer-score");

    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
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





