import { useGameContext } from '../GameProvider';
import Square from '../Square/Square';

export default function FormRow({ y }){
  const {
    correctWord
  } = useGameContext();

  let correctWordArr = [];

  for (let i = 0; i < correctWord.length; i++){
    correctWordArr.push(correctWord[i]);
  }

  return (
    <form>
      {y}
      {
        correctWordArr.map((word, i) => <Square key={word + i} y={y} x={i} />)
      }
    </form>    
  );
}