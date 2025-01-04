import React from 'react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const GameCard: React.FC<GameCardProps> = ({ id, title, description, image }) => {
  return (
    <Link to={`/games/${id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;