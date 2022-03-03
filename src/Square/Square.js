import './Square.css';

export default function Square({ x, y, letterObj }) {
  return (
    <div className={`square coord-${x}-${y}`} >
      {letterObj.letter}
    </div>
  );
}