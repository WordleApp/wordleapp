// import { render } from '@testing-library/react';
import { useGameContext } from '../GameProvider';
import './Row';

export default function Row(){
  const {
    correctWord
  } = useGameContext();

  console.log(`|| correctWord >`, correctWord);

  function renderBox(){ 
    for (let i = 0; i < correctWord.length; i++){
      return (
        <div className={`box ${i}`}>
          {`${i}`}
        </div>
      );
    }
  }



  return (
    <>
      <form className='game-row'>
        {
          renderBox()
        }
      </form>
    </>
  );
}