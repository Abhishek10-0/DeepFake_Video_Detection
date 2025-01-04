import React, { useState, useEffect } from 'react';
import './SpeedClicker.css';

const SpeedClicker = () => {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    let timer: number;
    if (isPlaying && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      if (clicks > highScore) {
        setHighScore(clicks);
      }
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, clicks, highScore]);

  const startGame = () => {
    setClicks(0);
    setTimeLeft(10);
    setIsPlaying(true);
  };

  const handleClick = () => {
    if (isPlaying) {
      setClicks(prev => prev + 1);
    }
  };

  return (
    <div className="speed-clicker">
      <h1 className="speed-clicker-title">Speed Clicker</h1>
      
      <div className="speed-clicker-stats">
        <div className="speed-clicker-score">Clicks: {clicks}</div>
        <div className="speed-clicker-high">High Score: {highScore}</div>
        {isPlaying && <div className="speed-clicker-timer">Time: {timeLeft}s</div>}
      </div>

      {isPlaying ? (
        <button 
          className="speed-clicker-button"
          onClick={handleClick}
        >
          CLICK ME!
        </button>
      ) : (
        <div className="speed-clicker-menu">
          <h2>Game {timeLeft === 0 ? 'Over!' : 'Ready!'}</h2>
          <p>{timeLeft === 0 ? `You got ${clicks} clicks!` : 'Click as fast as you can in 10 seconds!'}</p>
          <button 
            className="speed-clicker-start"
            onClick={startGame}
          >
            {timeLeft === 0 ? 'Play Again' : 'Start Game'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SpeedClicker; 