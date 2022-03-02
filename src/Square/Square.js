import './Square.css';

export default function Square({ x, y, letter }) {
  return (
    <div className={`square coord-${x}-${y}`} >
      {letter}
    </div>
  );
}