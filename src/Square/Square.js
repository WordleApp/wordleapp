import './Square.css';
import useGameContext from '../GameProvider';

export default function Square({ letterObj }) {
  // const {
  //   row
  // } = useGameContext();
  
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