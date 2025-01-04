import React, { useState, useEffect } from 'react';
import './NumberGuess.css';

const NumberGuess = () => {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [bestScore, setBestScore] = useState(Infinity);

  const initGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 100');
    setAttempts(0);
    setGameOver(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleGuess = () => {
    const numberGuess = parseInt(guess);
    if (isNaN(numberGuess)) {
      setMessage('Please enter a valid number');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (numberGuess === targetNumber) {
      setMessage(`Congratulations! You found the number in ${newAttempts} attempts!`);
      setGameOver(true);
      if (newAttempts < bestScore) {
        setBestScore(newAttempts);
      }
    } else if (numberGuess < targetNumber) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }
    setGuess('');
  };

  return (
    <div className="number-guess">
      <h1 className="number-guess-title">Number Guessing Game</h1>
      
      <div className="number-guess-stats">
        <div>Attempts: {attempts}</div>
        {bestScore < Infinity && <div>Best Score: {bestScore}</div>}
      </div>

      <div className="number-guess-message">{message}</div>

      {!gameOver ? (
        <div className="number-guess-input">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess"
            min="1"
            max="100"
          />
          <button onClick={handleGuess}>Guess</button>
        </div>
      ) : (
        <button 
          className="number-guess-reset"
          onClick={initGame}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default NumberGuess; 