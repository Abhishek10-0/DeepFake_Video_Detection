export function initSpeedClicker() {
  const clickArea = document.getElementById('clickArea');
  const timeLeft = document.getElementById('timeLeft');
  const score = document.getElementById('score');
  const startBtn = document.getElementById('startBtn');
  
  let clicks = 0;
  let timer = 10;
  let gameInterval;
  let isPlaying = false;

  function updateDisplay() {
    timeLeft.textContent = timer;
    score.textContent = clicks;
  }

  function endGame() {
    isPlaying = false;
    clearInterval(gameInterval);
    clickArea.classList.remove('active');
    startBtn.style.display = 'block';
    alert(`Game Over! Your score: ${clicks} clicks`);
  }

  function startGame() {
    clicks = 0;
    timer = 10;
    isPlaying = true;
    updateDisplay();
    startBtn.style.display = 'none';
    clickArea.classList.add('active');

    gameInterval = setInterval(() => {
      timer--;
      updateDisplay();
      if (timer <= 0) {
        endGame();
      }
    }, 1000);
  }

  clickArea.addEventListener('click', () => {
    if (isPlaying) {
      clicks++;
      updateDisplay();
    }
  });

  startBtn.addEventListener('click', startGame);
  updateDisplay();
}