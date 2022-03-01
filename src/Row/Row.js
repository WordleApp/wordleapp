// import { render } from '@testing-library/react';
import { useGameContext } from '../GameProvider';
import Square from '../Square/Square';
import './Row.css';

export default function Row(){
  const {
    correctWord,
    rows,
    setRows
  } = useGameContext();

  function renderSixRows() {
    let rows = [];
    
    // for (let i = 0; i < 6; i++) {
    //   rows.push(renderBox(i));
    // }
    console.log(rows);
    return (
      <div className="all-rows">
        {
          rows.map((row, i) => <Square key={row + i} i={i}/>)
        }
      </div>
    );
  }

  // function renderBox(x){
  //   let arr = [];
  //   for (let i = 0; i < correctWord.length; i++){
  //     arr.push(<div key={x + i} className={`box x-${x} row y-${i}`}>{`${i}`}</div>);
  //   }
  //   return (
  //     <div className="rows">
  //       {
  //         arr
  //       }
  //     </div>
  //   );
  // }

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