// query buttons
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const playAgainButton = document.querySelector(".play-again")
const gameTracker = document.querySelector(".game-tracker")
const winner = document.querySelector(".winner")
// add listeners to buttons to play game
rock.addEventListener("click", () => playRound("rock", getComputerChoice()))
paper.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))
playAgainButton.addEventListener("click", () => playAgain())
// define vars to track game
let humanGamesWon = 0
let computerGamesWon = 0
// track games played
let gamesPlayed = humanGamesWon + computerGamesWon









// functions

// Computer's choice
function getComputerChoice() {
    // coputers choice in a number
    const randomChoice = Math.random();
  
    let compMove;
  
    switch (true) {
      case randomChoice < 0.33:
        compMove = "rock";
        break;
      case randomChoice >= 0.33 && randomChoice <= 0.66:
        compMove = "paper";
        break;
      case randomChoice > 0.66:
        compMove = "scissors";
    }
  
    return compMove;
  }
  //play again
  function playAgain() {
    // reset global vars that do our tracking: 
    humanGamesWon = 0
    computerGamesWon = 0
    gamesPlayed = 0
    gameTracker.innerHTML = "";
    winner.innerHTML = ""


}
  // play a round
  function playRound(humanChoice, computerChoice) {
    // Early bail to "deactivate" buttons
    if (gamesPlayed >= 5) return;

    let humanWins;
    let li = document.createElement("li");

    if (humanChoice === computerChoice) {
        // Properly log tie results
        li.textContent = `Game ${gamesPlayed + 1}: It's a tie! You both selected ${humanChoice}.`;
        gameTracker.appendChild(li);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanWins = true;
    } else {
      humanWins = false;
    }

    if (humanWins === true) {
      humanGamesWon++;
      li.textContent = `Game ${gamesPlayed + 1}: You win! ${humanChoice} beats ${computerChoice}.`;
      gameTracker.appendChild(li);
    } else if (humanWins === false) {
      computerGamesWon++;
      li.textContent = `Game ${gamesPlayed + 1}: You lose! ${computerChoice} beats ${humanChoice}.`;
      gameTracker.appendChild(li);
    }

    // Increment games played after appending the result
    gamesPlayed++;

    // Stop the game when 5 rounds have been played
    if (gamesPlayed === 5) {
        if (humanGamesWon > computerGamesWon) {
            winner.textContent = "You won!";
        } else if (humanGamesWon < computerGamesWon) {
            winner.textContent = "You lose!";
        } else {
            winner.textContent = "It's a tie!";
        }
    }
}





