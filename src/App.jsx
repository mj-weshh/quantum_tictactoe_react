// src/App.jsx
import { useState } from 'react';
import GameBoard from './components/GameBoard';
import { checkWinner } from './utils/GameUtils';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isDraw = !winner && board.every(cell => cell !== null);

  return (
    <div className="min-h-screen bg-[#020d2c] flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 tracking-wider">
        QUANTUM TIC-TAC-TOE
      </h1>
      <div className="mb-6">
        {!winner && !isDraw && (
          <div className="text-white text-xl tracking-wide animate-pulse">
            PLAYER {isXNext ? 'X' : 'O'}'S TURN
          </div>
        )}
        {winner && (
          <div className="text-white text-2xl font-bold tracking-wide">
            PLAYER {winner} WINS
          </div>
        )}
        {isDraw && (
          <div className="text-white text-2xl font-bold tracking-wide">
            GAME DRAW
          </div>
        )}
      </div>
      <GameBoard board={board} onCellClick={handleCellClick} />
      <button
        onClick={resetGame}
        className="mt-8 px-8 py-3 bg-white text-[#020d2c] rounded-lg 
                 font-bold tracking-wide hover:bg-opacity-90 transition-all
                 duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
      >
        NEW GAME
      </button>
    </div>
  );
}

export default App;