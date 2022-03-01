// import { render } from '@testing-library/react';
import { useGameContext } from '../GameProvider';
import Square from '../Square/Square';
import { useEffect } from 'react';
import './Row.css';

export default function Row(){
  const {
    correctWord,
    row,
    setRow,
    game,
    setGame
  } = useGameContext();

  useEffect(() => {
    const newRowArr = new Array(correctWord.length).fill('');
    setRow(newRowArr);
  }, [correctWord]);

  return (
    <form className='game-row'>
      {
        row.map((square, i) => <Square key={square + i}/>)
      }
    </form>
  );
}