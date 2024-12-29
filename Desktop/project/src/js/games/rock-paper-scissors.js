export function initRockPaperScissors() {
  const choices = ['rock', 'paper', 'scissors'];
  const resultDisplay = document.getElementById('result');
  const scoreDisplay = document.getElementById('score');
  const buttons = document.querySelectorAll('.choice-btn');
  
  let playerScore = 0;
  let computerScore = 0;

  function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function playRound(playerChoice) {
    const computerChoice = computerPlay();
    
    // Display choices
    document.getElementById('playerChoice').textContent = playerChoice;
    document.getElementById('computerChoice').textContent = computerChoice;

    if (playerChoice === computerChoice) {
      resultDisplay.textContent = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultDisplay.textContent = 'You win!';
      playerScore++;
    } else {
      resultDisplay.textContent = 'Computer wins!';
      computerScore++;
    }

    scoreDisplay.textContent = `You: ${playerScore} - Computer: ${computerScore}`;
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      playRound(button.dataset.choice);
    });
  });
}