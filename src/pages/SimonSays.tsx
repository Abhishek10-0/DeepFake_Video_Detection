import React, { useState, useEffect } from 'react';
import './SimonSays.css';

const COLORS = ['green', 'red', 'yellow', 'blue'];

const SimonSays = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [playingSequence, setPlayingSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const playSound = (color: string) => {
    const audio = new Audio(`/sounds/${color}.mp3`);
    audio.play().catch(() => console.log('Audio play failed'));
  };

  const lightUpButton = (index: number) => {
    const button = document.querySelector(`[data-color="${COLORS[index]}"]`);
    button?.classList.add('active');
    playSound(COLORS[index]);
    setTimeout(() => {
      button?.classList.remove('active');
    }, 300);
  };

  const playSequence = async () => {
    setPlayingSequence([...sequence]);
    for (let i = 0; i < sequence.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      lightUpButton(sequence[i]);
    }
    setPlayingSequence([]);
  };

  const startGame = () => {
    const firstColor = Math.floor(Math.random() * 4);
    setSequence([firstColor]);
    setUserSequence([]);
    setScore(0);
    setIsPlaying(true);
    setGameOver(false);
  };

  const handleColorClick = (colorIndex: number) => {
    if (playingSequence.length > 0 || !isPlaying || gameOver) return;

    lightUpButton(colorIndex);
    const newUserSequence = [...userSequence, colorIndex];
    setUserSequence(newUserSequence);

    // Check if the user's sequence matches the game sequence
    for (let i = 0; i < newUserSequence.length; i++) {
      if (newUserSequence[i] !== sequence[i]) {
        setGameOver(true);
        setIsPlaying(false);
        if (score > highScore) {
          setHighScore(score);
        }
        return;
      }
    }

    // If user completed the sequence correctly
    if (newUserSequence.length === sequence.length) {
      setScore(score + 1);
      setUserSequence([]);
      setTimeout(() => {
        const nextColor = Math.floor(Math.random() * 4);
        setSequence([...sequence, nextColor]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (sequence.length > 0 && isPlaying) {
      playSequence();
    }
  }, [sequence]);

  return (
    <div className="simon-says">
      <h1 className="simon-says-title">Simon Says</h1>
      
      <div className="simon-says-stats">
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
      </div>

      <div className="simon-says-board">
        {COLORS.map((color, index) => (
          <button
            key={color}
            className={`simon-button ${color}`}
            data-color={color}
            onClick={() => handleColorClick(index)}
            disabled={playingSequence.length > 0 || !isPlaying}
          />
        ))}
      </div>

      {(!isPlaying || gameOver) && (
        <div className="simon-says-menu">
          {gameOver && (
            <div className="game-over-message">
              Game Over! Score: {score}
            </div>
          )}
          <button 
            className="simon-says-start"
            onClick={startGame}
          >
            {gameOver ? 'Play Again' : 'Start Game'}
          </button>
        </div>
      )}

      <div className="simon-says-instructions">
        <p>Watch the sequence and repeat it by clicking the buttons in the same order!</p>
      </div>
    </div>
  );
};

export default SimonSays; 