import React, { useState, useEffect } from 'react';
import './MathQuiz.css';

interface Question {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
}

const MathQuiz = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [highScore, setHighScore] = useState(0);

  const generateQuestion = () => {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;

    if (operator === '-' && num1 < num2) {
      [num1, num2] = [num2, num1]; // Ensure positive result
    }

    let answer;
    switch (operator) {
      case '+': answer = num1 + num2; break;
      case '-': answer = num1 - num2; break;
      case '*': answer = num1 * num2; break;
      default: answer = 0;
    }

    setCurrentQuestion({ num1, num2, operator, answer });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setIsPlaying(true);
    setMessage('');
    generateQuestion();
  };

  const handleAnswer = () => {
    if (!currentQuestion) return;

    const numAnswer = parseInt(userAnswer);
    if (isNaN(numAnswer)) {
      setMessage('Please enter a valid number');
      return;
    }

    if (numAnswer === currentQuestion.answer) {
      setScore(prev => prev + 1);
      setMessage('Correct! 🎉');
    } else {
      setMessage(`Wrong! The answer was ${currentQuestion.answer}`);
    }

    setUserAnswer('');
    generateQuestion();
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
      }
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score, highScore]);

  return (
    <div className="math-quiz">
      <h1 className="math-quiz-title">Math Quiz</h1>
      
      {isPlaying ? (
        <>
          <div className="math-quiz-stats">
            <div>Score: {score}</div>
            <div>Time: {timeLeft}s</div>
          </div>

          {currentQuestion && (
            <div className="math-quiz-question">
              <div className="question">
                {currentQuestion.num1} {currentQuestion.operator} {currentQuestion.num2} = ?
              </div>
              <div className="math-quiz-input">
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnswer()}
                  placeholder="Enter your answer"
                />
                <button onClick={handleAnswer}>Submit</button>
              </div>
            </div>
          )}
          
          {message && <div className="message">{message}</div>}
        </>
      ) : (
        <div className="math-quiz-menu">
          <p>Solve as many math problems as you can in 60 seconds!</p>
          <div className="high-score">High Score: {highScore}</div>
          <button onClick={startGame}>
            {timeLeft === 0 ? 'Play Again' : 'Start Game'}
          </button>
          {timeLeft === 0 && <div className="final-score">Final Score: {score}</div>}
        </div>
      )}
    </div>
  );
};

export default MathQuiz; 