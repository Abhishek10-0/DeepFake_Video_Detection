import  { useState, useEffect } from 'react';
import './ColorMatch.css';

const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
const GAME_DURATION = 30;

const ColorMatch = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [streak, setStreak] = useState(0);

  const generateNewRound = () => {
    const wordIndex = Math.floor(Math.random() * COLORS.length);
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    setCurrentWord(COLORS[wordIndex]);
    setCurrentColor(COLORS[colorIndex]);
  };

  const startGame = () => {
    setScore(0);
    setStreak(0);
    setTimeLeft(GAME_DURATION);
    setIsPlaying(true);
    generateNewRound();
  };

  const handleAnswer = (matches: boolean) => {
    const isCorrect = (matches && currentWord === currentColor) || 
                     (!matches && currentWord !== currentColor);
    
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setScore(prev => prev + (newStreak * 10));
    } else {
      setStreak(0);
    }
    
    generateNewRound();
  };

  useEffect(() => {
    let timer: number;
    if (isPlaying && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('colorMatchHighScore', score.toString());
      }
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score, highScore]);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('colorMatchHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  return (
    <div className="color-match">
      <div className="color-match-header">
        <h1 className="color-match-title">Color Match</h1>
        <div className="color-match-stats">
          <div className="stat-item">Score: {score}</div>
          <div className="stat-item">High Score: {highScore}</div>
          <div className="stat-item">Streak: {streak}x</div>
          {isPlaying && <div className="stat-item timer">Time: {timeLeft}s</div>}
        </div>
      </div>

      {isPlaying ? (
        <div className="color-match-game">
          <div 
            className="color-match-word"
            style={{ color: currentColor }}
          >
            {currentWord.toUpperCase()}
          </div>
          <div className="color-match-buttons">
            <button 
              className="match-button match"
              onClick={() => handleAnswer(true)}
            >
              MATCH
            </button>
            <button 
              className="match-button no-match"
              onClick={() => handleAnswer(false)}
            >
              NO MATCH
            </button>
          </div>
        </div>
      ) : (
        <div className="color-match-menu">
          <h2>{timeLeft === 0 ? 'Game Over!' : 'Ready to Play?'}</h2>
          {timeLeft === 0 && <p>Final Score: {score}</p>}
          <button 
            className="start-button"
            onClick={startGame}
          >
            {timeLeft === 0 ? 'Play Again' : 'Start Game'}
          </button>
          <div className="instructions">
            <p>Match the color of the text with the word itself.</p>
            <p>Build your streak for bonus points!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorMatch; 