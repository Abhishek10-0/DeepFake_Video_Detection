const games = [
  {
    id: 'speed-clicker',
    title: 'Speed Clicker',
    description: 'Test your clicking speed in this fast-paced challenge!',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&w=400&h=300',
    category: 'Action'
  },
  {
    id: 'number-master',
    title: 'Number Master',
    description: 'Can you guess the number? Use your logic to win!',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&w=400&h=300',
    category: 'Puzzle'
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description: 'Challenge the computer in this classic game!',
    image: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&w=400&h=300',
    category: 'Classic'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'Classic game of X\'s and O\'s. Play against the computer!',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&h=300',
    category: 'Classic'
  },
  {
    id: 'catch-ball',
    title: 'Catch the Ball',
    description: 'Move the paddle to catch falling balls and avoid bombs!',
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=400&h=300',
    category: 'Action'
  },
  {
    id: 'memory-match',
    title: 'Memory Match',
    description: 'Test your memory by matching pairs of cards!',
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=400&h=300',
    category: 'Puzzle'
  },
  {
    id: 'paddle-bounce',
    title: 'Paddle Bounce',
    description: 'Keep the ball bouncing with your paddle!',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=400&h=300',
    category: 'Action'
  },
  {
    id: 'maze-runner',
    title: 'Maze Runner',
    description: 'Navigate through the maze to reach the exit!',
    image: 'https://images.unsplash.com/photo-1614285457768-646f65ca8548?auto=format&fit=crop&w=400&h=300',
    category: 'Puzzle'
  },
  {
    id: 'typing-race',
    title: 'Typing Race',
    description: 'Race against time by typing words correctly!',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&h=300',
    category: 'Action'
  },
  {
    id: 'color-match',
    title: 'Color Match',
    description: 'Match colors quickly before time runs out!',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&h=300',
    category: 'Puzzle'
  }
];

export function initializeGames() {
  const gameCards = document.querySelector('.game-cards');
  if (gameCards) {
    gameCards.innerHTML = games.map(createGameCard).join('');
  }
}

function createGameCard(game) {
  return `
    <div class="game-card">
      <img src="${game.image}" alt="${game.title}" loading="lazy" />
      <div class="game-card-content">
        <span class="game-category">${game.category}</span>
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <a href="/games/${game.id}.html" class="play-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Play Now
        </a>
      </div>
    </div>
  `;
}