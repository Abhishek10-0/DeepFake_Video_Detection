import React, { useState } from 'react';
import './TicTacToe.css';

type Player = 'X' | 'O' | null;
type Board = Player[];

const TicTacToe = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);

  const calculateWinner = (squares: Board): Player | 'Draw' | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if (squares.every(square => square !== null)) {
      return 'Draw';
    }

    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) setWinner(gameWinner);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index: number) => (
    <button className="ttt-square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="ttt-game">
      <h1 className="ttt-title">Tic Tac Toe</h1>
      
      <div className="ttt-status">
        {winner 
          ? winner === 'Draw' 
            ? "It's a Draw!" 
            : `Winner: ${winner}`
          : `Next player: ${isXNext ? 'X' : 'O'}`
        }
      </div>

      <div className="ttt-board">
        <div className="ttt-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="ttt-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="ttt-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      <button className="ttt-reset" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
};

export default TicTacToe; 