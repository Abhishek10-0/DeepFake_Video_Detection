import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import RockPaperScissors from './pages/RockPaperScissors';
import ColorMatch from './pages/ColorMatch';
import MemoryGame from './pages/MemoryGame';
import TicTacToe from './pages/TicTacToe';
import SpeedClicker from './pages/SpeedClicker';
import NumberGuess from './pages/NumberGuess';
import WordScramble from './pages/WordScramble';
import MathQuiz from './pages/MathQuiz';
import SimonSays from './pages/SimonSays';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/games/rock-paper-scissors" element={<RockPaperScissors />} />
          <Route path="/games/color-match" element={<ColorMatch />} />
          <Route path="/games/memory-game" element={<MemoryGame />} />¸
          <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/games/speed-clicker" element={<SpeedClicker />} />
          <Route path="/games/number-guess" element={<NumberGuess />} />
          <Route path="/games/word-scramble" element={<WordScramble />} />
          <Route path="/games/math-quiz" element={<MathQuiz />} />
          <Route path="/games/simon-says" element={<SimonSays />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;