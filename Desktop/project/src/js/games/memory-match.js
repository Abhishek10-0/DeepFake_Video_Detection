// Game configuration
const CARD_PAIRS = 8;
const FLIP_DELAY = 1000;

// Game state
const gameState = {
  cards: [],
  flippedCards: [],
  matchedPairs: 0,
  isLocked: false,
  moves: 0
};

// Card symbols (emojis for visual representation)
const symbols = ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎯'];

function createCard(symbol, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.index = index;
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back">${symbol}</div>
    </div>
  `;
  return card;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function flipCard(card) {
  if (
    gameState.isLocked || 
    gameState.flippedCards.length >= 2 || 
    card.classList.contains('flipped') ||
    card.classList.contains('matched')
  ) return;

  card.classList.add('flipped');
  gameState.flippedCards.push(card);

  if (gameState.flippedCards.length === 2) {
    gameState.moves++;
    updateMoves();
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = gameState.flippedCards;
  const match = card1.querySelector('.card-back').textContent === 
                card2.querySelector('.card-back').textContent;

  gameState.isLocked = true;

  setTimeout(() => {
    if (match) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      gameState.matchedPairs++;

      if (gameState.matchedPairs === CARD_PAIRS) {
        endGame();
      }
    } else {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
    }

    gameState.flippedCards = [];
    gameState.isLocked = false;
  }, FLIP_DELAY);
}

function updateMoves() {
  document.getElementById('moves').textContent = gameState.moves;
}

function endGame() {
  const message = `Congratulations! You won in ${gameState.moves} moves!`;
  document.getElementById('status').textContent = message;
  document.getElementById('startBtn').style.display = 'block';
}

function startGame() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  
  gameState.cards = [];
  gameState.flippedCards = [];
  gameState.matchedPairs = 0;
  gameState.isLocked = false;
  gameState.moves = 0;
  
  updateMoves();
  document.getElementById('status').textContent = 'Match the pairs!';
  document.getElementById('startBtn').style.display = 'none';

  // Create and shuffle cards
  const cardSymbols = [...symbols, ...symbols];
  shuffleArray(cardSymbols);

  cardSymbols.forEach((symbol, index) => {
    const card = createCard(symbol, index);
    card.addEventListener('click', () => flipCard(card));
    board.appendChild(card);
    gameState.cards.push(card);
  });
}

export function initMemoryMatch() {
  document.getElementById('startBtn').addEventListener('click', startGame);
  startGame();
}