export function initNumberMaster() {
  const guessInput = document.getElementById('guessInput');
  const submitBtn = document.getElementById('submitGuess');
  const message = document.getElementById('message');
  const attemptsLeft = document.getElementById('attemptsLeft');
  const startBtn = document.getElementById('startBtn');

  let targetNumber;
  let attempts;
  let gameActive = false;

  function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 7;
    gameActive = true;
    message.textContent = 'Game started! Guess a number between 1 and 100';
    attemptsLeft.textContent = attempts;
    guessInput.value = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
    startBtn.style.display = 'none';
  }

  function checkGuess() {
    if (!gameActive) return;

    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      message.textContent = 'Please enter a valid number between 1 and 100';
      return;
    }

    attempts--;
    attemptsLeft.textContent = attempts;

    if (guess === targetNumber) {
      endGame(true);
    } else if (attempts === 0) {
      endGame(false);
    } else {
      message.textContent = guess < targetNumber ? 'Too low!' : 'Too high!';
    }

    guessInput.value = '';
  }

  function endGame(won) {
    gameActive = false;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    startBtn.style.display = 'block';
    message.textContent = won 
      ? `Congratulations! You found the number ${targetNumber}!` 
      : `Game Over! The number was ${targetNumber}`;
  }

  submitBtn.addEventListener('click', checkGuess);
  startBtn.addEventListener('click', startGame);
  guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
  });
}