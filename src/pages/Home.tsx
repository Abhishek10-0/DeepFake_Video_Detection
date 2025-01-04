
import { Gamepad,  Users, Zap, } from 'lucide-react';
import GameCard from '../components/GameCard';

const games = [
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description: 'Challenge the computer in this classic game!',
    image: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'color-match',
    title: 'Color Match',
    description: 'Test your reflexes by matching colors and words!',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'memory-game',
    title: 'Memory Game',
    description: 'Match pairs of cards in this classic memory challenge!',
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'Classic X and O game against the computer!',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'speed-clicker',
    title: 'Speed Clicker',
    description: 'How fast can you click? Test your clicking speed!',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'number-guess',
    title: 'Number Guess',
    description: 'Guess the number between 1 and 100!',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'word-scramble',
    title: 'Word Scramble',
    description: 'Unscramble the words before time runs out!',
    image: 'https://images.unsplash.com/photo-1632167764165-74a3d686e9f8?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'math-quiz',
    title: 'Math Quiz',
    description: 'Test your math skills with quick calculations!',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'simon-says',
    title: 'Simon Says',
    description: 'Follow the pattern in this memory sequence game!',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&h=300',
  }
];

const features = [
  {
    icon: <Gamepad className="w-12 h-12 text-indigo-600" />,
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Play Amazing Games
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Choose from our collection of fun and challenging games!
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
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