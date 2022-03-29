import './Square.css';

export default function Square({ letterObj }) {
  
  // good idea to break this logic out of the ternary, since it could have gotten messy
  // nonetheless, this could also be expressed as a ternery
  function letterOrNot() {
    return  letterObj.letterIsWrong ? 'letterNotInWord' : '';
  }

  return (
    <div className={
      // nice ternaries!
      `square
      ${letterObj.letterInCorrectWord ? 'letterInCorrectWord' : letterOrNot()}
      ${letterObj.letterInCorrectWordAndRightPlace ? 'letterInCorrectWordAndRightPlace' : ''}
    `}>
      {letterObj.letter}
    </div>
  );
}