import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const EMOJIS = ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎯'];

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);

  const initializeGame = () => {
    const duplicatedEmojis = [...EMOJIS, ...EMOJIS];
    const shuffledEmojis = duplicatedEmojis.sort(() => Math.random() - 0.5);
    const newCards = shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(newCards);
    setFlippedCards([]);
    setMoves(0);
    setIsGameComplete(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2 || cards[cardId].isFlipped || cards[cardId].isMatched) {
      return;
    }

    const newCards = [...cards];
    newCards[cardId].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, cardId]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves(prev => prev + 1);
      const [firstCard, secondCard] = flippedCards;

      if (cards[firstCard].emoji === cards[secondCard].emoji) {
        const newCards = [...cards];
        newCards[firstCard].isMatched = true;
        newCards[secondCard].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);

        // Check if game is complete
        if (newCards.every(card => card.isMatched)) {
          setIsGameComplete(true);
        }
      } else {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[firstCard].isFlipped = false;
          newCards[secondCard].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  return (
    <div className="memory-game">
      <div className="memory-game-header">
        <h1 className="memory-game-title">Memory Game</h1>
        <div className="memory-game-stats">
          <span>Moves: {moves}</span>
          <button className="memory-game-reset" onClick={initializeGame}>
            New Game
          </button>
        </div>
      </div>

      <div className="memory-game-grid">
        {cards.map(card => (
          <div
            key={card.id}
            className={`memory-card ${card.isFlipped ? 'flipped' : ''} ${
              card.isMatched ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="memory-card-inner">
              <div className="memory-card-front" />
              <div className="memory-card-back">{card.emoji}</div>
            </div>
          </div>
        ))}
      </div>

      {isGameComplete && (
        <div className="memory-game-complete">
          <h2>Congratulations!</h2>
          <p>You completed the game in {moves} moves</p>
          <button onClick={initializeGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame; 