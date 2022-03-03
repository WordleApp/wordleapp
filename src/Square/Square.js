import './Square.css';

export default function Square({ letterObj }) {
  return (
    <div className={`square
    ${letterObj.letterInCorrectWord ? 'letterInCorrectWord' : ''}
    ${letterObj.letterInCorrectWordAndRightPlace ? 'letterInCorrectWordAndRightPlace' : ''}
    `} >
      {letterObj.letter}
    </div>
  );
}