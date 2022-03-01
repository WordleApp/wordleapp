// import { render } from '@testing-library/react';
import { useGameContext } from '../GameProvider';
import './Row.css';

export default function Row(){
  const {
    correctWord,
    rows,
    setRows
  } = useGameContext();

  function renderSixRows() {
    let rows = [];
    for (let i = 0; i < 6; i++) {
      rows.push(renderBox());
    }
    return (
      <div className="all-rows">
        {
          rows.map((row) => row)
        }
      </div>
    );
  }

  function renderBox(){
    let arr = [];
    for (let i = 0; i < correctWord.length; i++){
      arr.push(<div className={`box ${i} row`}>{`${i}`}</div>);
    }
    return (
      <div className="rows">
        {
          arr.map((row) => row)
        }
      </div>
    );
  }

  return (
    <>
      <form className='game-row'>
        {
          renderSixRows()
        }
      </form>
    </>
  );
}