import './Square.css';

export default function Square({ x, y }) {
  return (
    <div className={`square coord-${x}-${y}`} >

    </div>
  );
}