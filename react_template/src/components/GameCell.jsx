// src/components/GameCell.jsx
function GameCell({ value, onClick }) {
  const baseClasses = `w-24 h-24 md:w-32 md:h-32 border-2 border-white rounded-lg 
                      flex items-center justify-center text-4xl md:text-6xl font-bold 
                      transition-all duration-300 cursor-pointer
                      hover:border-opacity-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`;

  const valueClasses = value === 'X' 
    ? 'text-white' 
    : 'text-[#4da6ff]';

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${value ? valueClasses : 'text-transparent border-opacity-50'}`}
    >
      {value || '.'}
    </div>
  );
}

export default GameCell;