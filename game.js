// Initialize the score of the computer and the human.
let ComputerScore = 0;
let HumanScore = 0;
let TieCounter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    // Use getRandomInt to make the computer randomly choose.
   const choices = ["rock", "paper", "scissors"];
   return choices[getRandomInt(3)];
}

// Define a function to get the humans choice.
function getHumanChoice() {
    let HumanChoice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    return HumanChoice;
}

// Create a function that determines the winner.
function CheckWinner(ComputerChoice, HumanChoice){
    if (ComputerChoice === HumanChoice){
        return "Tie"
    }
    else {
        if (ComputerChoice === "rock")
        {
            if (HumanChoice === "paper")
            {
                return "Human"
            }
            else if (HumanChoice === "scissors")
            {
                return "Computer"
            }
        }
        
    }   if (ComputerChoice === "paper")
        {
            if (HumanChoice === "rock")
            {
                return "Computer"
            }
            
            else if (HumanChoice === "scissors")
            {
                return "Human"
            }
        }   
        
        if (ComputerChoice === "scissors")
        {
            if (HumanChoice === "rock")
            {
                return "Human"
            }
            
            else if (HumanChoice === "paper")
            {
                return "Computer"
            }
        }   
}

function playRound(ComputerChoice, HumanChoice) {
    let winner = CheckWinner(ComputerChoice, HumanChoice)
    console.log(winner)
    if (winner === "Computer") {
        ComputerScore++;
    }
    else if (winner === "Human") {
        HumanScore++;
    }
    else{
        TieCounter++;
    }
}  

function playGame(){
    for (let i=0; i<5; i++)
    {   
        const ComputerChoice = getComputerChoice();
        const HumanChoice = getHumanChoice();
        playRound(ComputerChoice, HumanChoice);
    }
    if (HumanScore > ComputerScore) {
        console.log("Game over! Human Wins!");
    }
    else
    {
        console.log('Game over! Computer Wins!');
    }
}

playGame();
