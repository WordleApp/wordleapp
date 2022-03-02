// import { render } from '@testing-library/react';
import { useGameContext } from '../GameProvider';
import Square from '../Square/Square';
import { useEffect } from 'react';
import './Row.css';

export default function Row({ y, currentRow }){
  const {
    correctWord,
    queryWord,
    definition,
    setDefinition,
    row,
    setRow,
    game,
    setGame
  } = useGameContext();

  // const dummyArr = [];

  useEffect(() => {
    fillArrays();

  }, [correctWord]);

  useEffect(() => {
    async function defineWord() {
  
      const response = await fetch(`/.netlify/functions/define?word=${queryWord}`);
      const json = await response.json();
      // console.log('response', response);
      // console.log('queryword', queryWord);
      // console.log('json', json);
      setDefinition(json);
    }

    defineWord();
  }, []);

  function fillArrays() {
    if (!(game[0].length > 0)) {
      const newRowArr = new Array(correctWord.length).fill('');
      const newGameArray = game.map(() => newRowArr);
      setGame([...newGameArray]);
    }
  }
  return (
    <form className='game-row'>
      {
        currentRow.map((letter, i) => <Square letter={ letter} key={letter + i} y={y} x={i} />)
      }
    </form>
  );
}