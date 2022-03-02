// import { render } from '@testing-library/react';
import { useGameContext } from '../GameProvider';
import Square from '../Square/Square';
import { useEffect } from 'react';
import './Row.css';

export default function Row({ y }){
  const {
    correctWord,
    row,
    setRow,
    game,
    setGame
  } = useGameContext();

  // const dummyArr = [];

  useEffect(() => {
    const newRowArr = new Array(correctWord.length).fill('');
    setRow(newRowArr);
    fillArrays();

  }, [correctWord]);

  function fillArrays() {
    const newRowArr = new Array(correctWord.length).fill('');
    const newGameArray = game.map(array => array = newRowArr);
    setGame([...newGameArray]);
  }
  return (
    <form className='game-row'>
      {
        row.map((square, i) => <Square key={square + i} y={y} x={i} />)
      }
    </form>
  );
}