import React from 'react';
import { Link } from 'react-router-dom';
import { GameController, Star, Users, Zap } from 'lucide-react';
import GameCard from '../components/GameCard';

const games = [
  {
    id: 'button-clicker',
    title: 'Click the Button',
    description: 'Test your clicking speed in this fast-paced challenge!',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'number-guess',
    title: 'Number Guessing',
    description: 'Can you guess the number? Use your logic to win!',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description: 'Challenge the computer in this classic game!',
    image: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&w=400&h=300',
  },
];

const features = [
  {
    icon: <GameController className="w-12 h-12 text-indigo-600" />,
    title: 'Free HTML5 Games',
    description: 'Enjoy our collection of games directly in your browser, no downloads needed.',
  },
  {
    icon: <Zap className="w-12 h-12 text-indigo-600" />,
    title: 'Fast Loading',
    description: 'Optimized performance ensures smooth gameplay on any device.',
  },
  {
    icon: <Users className="w-12 h-12 text-indigo-600" />,
    title: 'Multiplayer Support',
    description: 'Challenge your friends in our multiplayer games.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Play Amazing Games Online
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your destination for free HTML5 games. Play instantly, no downloads required!
            </p>
            <Link
              to="/games"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors"
            >
              Start Playing
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Games</h2>
            <p className="text-gray-600">Check out our most popular games!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600">Experience the best in online gaming</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}