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
      console.log('correctWord', correctWord);
      setDefinition(json);
    }

    defineWord();
  }, [correctWord]);

  function fillArrays() {
    if (!(game[0].length > 0)) {
      const newRowArr = new Array(correctWord.length).fill({
        letter: '',
        letterInCorrectWord: false,
        letterInCorrectWordAndRightPlace: false
      });
      const newGameArray = game.map(() => newRowArr);
      setGame([...newGameArray]);
    }
  }

  // document.getElementById('invisible-guess').onblur = function(event) { var blurEl = this; setTimeout(function(){blurEl.focus();
  // }, 10);
  // };

  return (
    <form className='game-row'>
      {
        currentRow.map((letterObj, i) => <Square letterObj={ letterObj} key={letterObj + i} y={y} x={i} />)
      }
    </form>
  );
}