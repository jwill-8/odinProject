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

// works:
//console.log(getComputerChoice(), getComputerChoice(), getComputerChoice())

// User input
function getUserChoice() {
  let userChoice = prompt("Enter one of: rock, paper, or scissors");

  // send to lower case if someone introduces capitals:
  return userChoice.toLowerCase();
}
let humanGamesWon = 0;

let computerGamesWon = 0;

function playRound(humanChoice, computerChoice) {
  // rock beats scissors, paper beats rock, scissors beats paper
  // define everything in terms of humanChoice prevailing:
  let humanWins;

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice == "scissors" && computerChoice === "paper")
  ) {
    humanWins = true;
  } else if (humanChoice === computerChoice) {
    return `It's a tie! You both selected`;
  } else {
    humanWins = false;
  }

  if (humanWins) {
    humanGamesWon++;
  } else {
    computerGamesWon++;
  }

  return humanWins
    ? `You win ${humanChoice} beats ${computerChoice}!`
    : `You lose ${computerChoice} beats ${humanChoice}!`;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(getUserChoice(), getComputerChoice()));
  }

  if (humanGamesWon > computerGamesWon) {
    return `You win the game ${humanGamesWon} to ${computerGamesWon}!`;
  } else if (humanGamesWon === computerGamesWon) {
    return `Itls a tie ${humanGamesWon} to ${computerGamesWon}`;
  } else {
    return `You lost the game ${computerGamesWon} to ${humanGamesWon}!`;
  }
}

console.log(playGame());
