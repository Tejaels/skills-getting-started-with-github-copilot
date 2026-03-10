const cells = Array.from(document.querySelectorAll(".cell"));
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset-game");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function updateStatus(message) {
  statusText.textContent = message;
}

function checkWinner() {
  for (const [a, b, c] of winPatterns) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function handleCellClick(event) {
  const index = Number(event.target.dataset.index);

  if (!gameActive || board[index]) {
    return;
  }

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  const winner = checkWinner();
  if (winner) {
    gameActive = false;
    updateStatus(`Player ${winner} wins!`);
    cells.forEach((cell) => {
      cell.disabled = true;
    });
    return;
  }

  if (!board.includes("")) {
    gameActive = false;
    updateStatus("It's a draw!");
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus(`Player ${currentPlayer}'s turn`);
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  updateStatus("Player X's turn");

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.disabled = false;
  });
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

resetButton.addEventListener("click", resetGame);
