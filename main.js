const buttons = document.querySelectorAll("button");
const results = document.getElementById("resultsText");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click" , ()=>{
        const result = chooseWinner(button.id, computerPlay());
        results.innerHTML = result;
    })
})

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }


function chooseWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      userScore.textContent = "Your Score: " + playerScore;
      return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
      computerScore++;
      compScore.textContent = "Computer Score: " + computerScore;
      return "You lose! " + playerSelection + " beats " + computerSelection;
    }
  }