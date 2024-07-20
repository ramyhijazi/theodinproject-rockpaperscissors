// Initialize the score of the computer and the human globally
let ComputerScore = 0;
let HumanScore = 0;
let TieCounter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)];
}

function CheckWinner(ComputerChoice, HumanChoice) {
    if (ComputerChoice === HumanChoice) {
        return "Tie";
    } else {
        if (ComputerChoice === "rock") {
            if (HumanChoice === "paper") {
                return "Human";
            } else if (HumanChoice === "scissors") {
                return "Computer";
            }
        } else if (ComputerChoice === "paper") {
            if (HumanChoice === "rock") {
                return "Computer";
            } else if (HumanChoice === "scissors") {
                return "Human";
            }
        } else if (ComputerChoice === "scissors") {
            if (HumanChoice === "rock") {
                return "Human";
            } else if (HumanChoice === "paper") {
                return "Computer";
            }
        }
    }
}

function updateGameResult(result) {
    const resultElement = document.getElementById('gameresult');
    resultElement.textContent = result;
}

function playRound(HumanChoice) {
    const ComputerChoice = getComputerChoice();
    const winner = CheckWinner(ComputerChoice, HumanChoice);
    console.log(`Computer chose: ${ComputerChoice}`);
    console.log(`Human chose: ${HumanChoice}`);
    console.log(`Round Winner: ${winner}`);

    if (winner === "Computer") {
        ComputerScore++;
    } else if (winner === "Human") {
        HumanScore++;
    } else {
        TieCounter++;
    }
    // Update scores after each round
    console.log(`Scores - Computer: ${ComputerScore}, Human: ${HumanScore}, Tie: ${TieCounter}`);
    if (ComputerScore === 5) { 
        alert(`Game over! Winner: Computer. Restarting game.`);
        HumanScore = 0;
        ComputerScore = 0;
        TieCounter = 0;
        return;
    }
    if (HumanScore === 5) {
        alert(`Game over! Winner: Human. Restarting game.`);
        HumanScore = 0;
        ComputerScore = 0;
        TieCounter = 0;
        return;
    }
    // Update the result in the HTML
    updateGameResult(`Winner: ${winner}`);
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function() {
    HumanChoice = 'rock';
    playRound(HumanChoice);
});

paper.addEventListener('click', function() {
    HumanChoice = 'paper';
    playRound(HumanChoice);
});

scissors.addEventListener('click', function() {
    HumanChoice = 'scissors';
    playRound(HumanChoice);
});