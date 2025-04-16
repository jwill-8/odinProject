function createPlayer(name, marker) {
  // log wins
  let score = 0;
  // what marker?
  function getMarker() {
    return marker;
  }
  // get score
  function getScore() {
    return score;
  }
  // increase score
  function updateScore() {
    return (score += 1);
  }

  return { name, getMarker, getScore, updateScore };
}

const gameboard = (function () {
  // Define the board as an array of len 9
  let board = ["", "", "", "", "", "", "", "", ""];
  // getter of board
  function getBoard() {
    return board;
  }
  // update a 'cell' in board
  function updateBoardCell(position, marker) {
    if (board[position] === "") {
      // if cell is empty update
      board[position] = marker;
      // return boolean based on if board is updated or not
      return true;
    } else {
      return false;
    }
  }
  // reset board
  function reset() {
    board.forEach((_, i) => (board[i] = ""));
  }

  return { getBoard, updateBoardCell, reset };
})();

function toGame(player1, player2) {
  // start with p1
  let currentPlayer = player1;
  // container for game result
  let winner = null;
  // upon invocation, game should not be completed
  let gameCompleted = false;
  // function that completes a round, must check for if the game is completed,
  // if the game is won, ties, increment players score
  function playRound(index) {
    if (gameCompleted) return "invalid";

    const cellCanBeUsed = gameboard.updateBoardCell(
      index,
      currentPlayer.getMarker()
    );
    if (!cellCanBeUsed) return "invalid";

    if (gameWon(currentPlayer.getMarker())) {
      winner = currentPlayer;
      winner.updateScore();
      gameCompleted = true;
      return "win";
    } else if (gameboard.getBoard().every((cell) => cell !== "")) {
      gameCompleted = true;
      return "tie";
    } else {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      return "continue";
    }
  }

  // fn to determine if a game is won in a round
  function gameWon(marker) {
    const board = gameboard.getBoard();
    // define all consecutive rows in row-wise, colwise, and diagonalwise directions
    // that can lead to wins
    const winDims = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // if AT LEAST ONE winDim has all cells populated with the same/curr marker,
    // game is won (true) else false (not won)
    return winDims.some((dim) => dim.every((cell) => board[cell] === marker));
  }
  // reset game fn
  function resetGame() {
    // reset board
    gameboard.reset();
    // reset player
    currentPlayer = player1;
    gameCompleted = false;
  }

  function getWinner() {
    return winner;
  }

  return { playRound, resetGame, gameWon, getWinner };
}

const displayController = (function () {
  const cells = document.querySelectorAll(".game-board-cell");
  const resetBtn = document.getElementById("reset");
  const p1ScoreDisplay = document.querySelector("#p1 h3");
  const p2ScoreDisplay = document.querySelector("#p2 h3");

  const player1 = createPlayer("Player 1", "X");
  const player2 = createPlayer("Player 2", "O");
  const game = toGame(player1, player2);

  // Initial render
  updateBoardDisplay();
  updateScoreDisplay();

  function updateBoardDisplay() {
    const board = gameboard.getBoard();
    cells.forEach((cell, idx) => {
      cell.textContent = board[idx];
    });
  }

  function updateScoreDisplay() {
    p1ScoreDisplay.textContent = `Score: ${player1.getScore()}`;
    p2ScoreDisplay.textContent = `Score: ${player2.getScore()}`;
  }

  function handleCellClick(e) {
    const index = Array.from(cells).indexOf(e.target);
    const result = game.playRound(index);

    if (result === "invalid") return;

    updateBoardDisplay();

    if (result === "win" || result === "tie") {
      updateScoreDisplay();
      setTimeout(() => {
        game.resetGame();
        updateBoardDisplay();
      }, 1000);
    }
  }

  // Setup event listeners
  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  resetBtn.addEventListener("click", () => {
    game.resetGame();
    updateBoardDisplay();
  });
})();
