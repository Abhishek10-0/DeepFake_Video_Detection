import { useState } from 'react';
import './RockPaperScissors.css';

const RockPaperScissors = () => {
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [result, setResult] = useState('');

  const playGame = (playerChoice: string) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let gameResult = '';
    
    if (playerChoice === computerChoice) {
      gameResult = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      gameResult = 'You win!';
      setScore(prev => ({ ...prev, player: prev.player + 1 }));
    } else {
      gameResult = 'Computer wins!';
      setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
    }
    
    setResult(`You chose ${playerChoice}, computer chose ${computerChoice}. ${gameResult}`);
  };

  const resetGame = () => {
    setScore({ player: 0, computer: 0 });
    setResult('');
  };

  return (
    <div className="rps-container">
      <h1 className="rps-title">Rock Paper Scissors</h1>
      
      <div className="rps-choices">
        <button className="rps-choice" onClick={() => playGame('rock')}>Rock</button>
        <button className="rps-choice" onClick={() => playGame('paper')}>Paper</button>
        <button className="rps-choice" onClick={() => playGame('scissors')}>Scissors</button>
      </div>

      {result && <div className="rps-result">{result}</div>}
      
      <div className="rps-score">
        <div className="rps-score-item">Player: {score.player}</div>
        <div className="rps-score-item">Computer: {score.computer}</div>
      </div>

      <button className="rps-reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default RockPaperScissors; 