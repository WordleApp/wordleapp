import { useGameContext } from '../GameProvider';
import Square from '../Square/Square';

export default function FormRow(){
  const {
    correctWord
  } = useGameContext();

  let correctWordArr = [];

  for (let i = 0; i < correctWord.length; i++){
    correctWordArr.push(correctWord[i]);
  }

  return (
    <form>
      {
        correctWordArr.map((word, i) => <Square key={word + i} word={word} />)
      }
    </form>    
  );
}