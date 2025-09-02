

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

function getHumanChoice() {
    let choice = prompt("Choose your move (rock, paper, or scissors): ");
    const VALID_CHOICE = ["rock", "paper", "scissors"];
    
    while(!VALID_CHOICE.includes(choice.toLowerCase())) {
        choice = prompt("Invalid choice, please enter rock, paper or scissors: ")
    }

    return choice.toLowerCase();
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let lossMsg = `You lose! ${computerChoice} beats ${humanChoice}`;
        let tieMsg = `It's a tie! ${computerChoice} is the same as ${humanChoice}`;
        let winMsg = `You Win! ${humanChoice} beats ${computerChoice}`;

        if (humanChoice === computerChoice) {
            humanScore++
            computerScore++
            console.log(tieMsg + `\nscore: ${humanScore} to ${computerScore}`);
        } 
        else if ((humanChoice === 'rock' && computerChoice == 'paper') 
            || (humanChoice === 'scissors' && computerChoice == 'rock') 
            || (humanChoice === 'paper' && computerChoice == 'scissors')) {
                computerScore++;
                console.log(lossMsg + `\nscore: ${humanScore} to ${computerScore}`);
        }
        else {
            humanScore++;
            console.log(winMsg + `\nscore: ${humanScore} to ${computerScore}`);
        }
    }

    for(let i = 0; i < 5; i++) {
        let humanEX = getHumanChoice();
        let computerEX = getComputerChoice();

        playRound(humanEX, computerEX);
    }

    console.log("\n");

    let endMsg;

    if (humanScore > computerScore) {
        endMsg = `You won the game! The score was ${humanScore} to ${computerScore}`;
    }
    else if(humanScore < computerScore) {
        endMsg = `You lost the game :( The score was ${humanScore} to ${computerScore}`;
    }
    else {
        endMsg = `It's a tie! ${humanScore} to ${computerScore}`;
    }

    return endMsg;
}

console.log(playGame());



