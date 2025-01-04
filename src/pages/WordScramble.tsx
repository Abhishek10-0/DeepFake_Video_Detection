import React, { useState, useEffect } from 'react';
import './WordScramble.css';

const WORDS = [
  'REACT', 'JAVASCRIPT', 'TYPESCRIPT', 'PROGRAMMING',
  'DEVELOPER', 'COMPUTER', 'CODING', 'SOFTWARE',
  'WEBSITE', 'INTERNET'
];

const WordScramble = () => {
  const [word, setWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrambleWord = (word: string) => {
    return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
  };

  const getNewWord = () => {
    const newWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(newWord);
    setScrambledWord(scrambleWord(newWord));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setMessage('');
    getNewWord();
  };

  const handleGuess = () => {
    if (userGuess.toUpperCase() === word) {
      setScore(prev => prev + 1);
      setMessage('Correct! 🎉');
      setUserGuess('');
      getNewWord();
    } else {
      setMessage('Try again! ❌');
    }
  };

  useEffect(() => {
    let timer: number;
    if (isPlaying && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      setMessage(`Game Over! Final Score: ${score}`);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score]);

  return (
    <div className="word-scramble">
      <h1 className="word-scramble-title">Word Scramble</h1>
      
      {isPlaying ? (
        <>
          <div className="word-scramble-stats">
            <div>Score: {score}</div>
            <div>Time: {timeLeft}s</div>
          </div>

          <div className="word-scramble-game">
            <div className="scrambled-word">{scrambledWord}</div>
            <div className="word-scramble-input">
              <input
                type="text"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder="Enter your guess"
              />
              <button onClick={handleGuess}>Submit</button>
            </div>
            {message && <div className="message">{message}</div>}
          </div>
        </>
      ) : (
        <div className="word-scramble-menu">
          <p>Unscramble as many words as you can in 30 seconds!</p>
          <button onClick={startGame}>
            {timeLeft === 0 ? 'Play Again' : 'Start Game'}
          </button>
          {timeLeft === 0 && <div className="final-score">Final Score: {score}</div>}
        </div>
      )}
    </div>
  );
};

export default WordScramble; 