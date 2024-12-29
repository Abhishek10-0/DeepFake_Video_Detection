// Game state management
const gameState = {
  currentPlayer: 'X',
  board: Array(9).fill(''),
  gameActive: false
};

// Game logic utilities
const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

function checkWinner() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameState.board[a] && 
           gameState.board[a] === gameState.board[b] && 
           gameState.board[a] === gameState.board[c];
  });
}

function isBoardFull() {
  return gameState.board.every(cell => cell !== '');
}

function makeComputerMove() {
  const emptyCells = gameState.board
    .map((cell, index) => cell === '' ? index : null)
    .filter(cell => cell !== null);

  if (emptyCells.length > 0) {
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    handleMove(randomCell);
  }
}

function handleMove(index) {
  if (!gameState.gameActive || gameState.board[index] !== '') return;

  gameState.board[index] = gameState.currentPlayer;
  updateCell(index);

  if (checkWinner()) {
    endGame(`${gameState.currentPlayer} wins!`);
    return;
  }

  if (isBoardFull()) {
    endGame("It's a draw!");
    return;
  }

  gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
  updateStatus();

  if (gameState.currentPlayer === 'O') {
    setTimeout(makeComputerMove, 500);
  }
}

// DOM manipulation
function updateCell(index) {
  const cells = document.querySelectorAll('.cell');
  cells[index].textContent = gameState.board[index];
  cells[index].classList.add(gameState.board[index]);
}

function updateStatus() {
  const status = document.getElementById('status');
  status.textContent = `Current player: ${gameState.currentPlayer}`;
}

function endGame(message) {
  gameState.gameActive = false;
  const status = document.getElementById('status');
  status.textContent = message;
  document.getElementById('startBtn').style.display = 'block';
}

function startGame() {
  gameState.board = Array(9).fill('');
  gameState.currentPlayer = 'X';
  gameState.gameActive = true;

  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
  });

  updateStatus();
  document.getElementById('startBtn').style.display = 'none';
}

export function initTicTacToe() {
  const board = document.getElementById('board');
  const cells = Array(9).fill(null).map((_, i) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.addEventListener('click', () => handleMove(i));
    return cell;
  });
  
  cells.forEach(cell => board.appendChild(cell));
  document.getElementById('startBtn').addEventListener('click', startGame);
}