import './Square.css';

export default function Square({ letterObj }) {
  
  function letterOrNot(){
    if (!letterObj.letterIsWrong){
      return '';
    } else {
      return 'letterNotInWord';
    }
  }

  return (
    <div className={
      `square
      ${letterObj.letterInCorrectWord ? 'letterInCorrectWord' : letterOrNot()}
      ${letterObj.letterInCorrectWordAndRightPlace ? 'letterInCorrectWordAndRightPlace' : ''}
    `}>
      {letterObj.letter}
    </div>
  );
}