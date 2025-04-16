// src/components/GameBoard.jsx
import GameCell from './GameCell';

function GameBoard({ board, onCellClick }) {
  return (
    <div className="grid grid-cols-3 gap-3 bg-[#020d2c] p-4 rounded-lg
                    shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      {board.map((cell, index) => (
        <GameCell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
}

export default GameBoard;