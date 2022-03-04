// import { render } from '@testing-library/react';
import { useGameContext } from '../GameProvider';
import Square from '../Square/Square';
import { useEffect } from 'react';
import './Row.css';

export default function Row({ currentRow }){
  const {
    correctWord, setCorrectWord,
    queryWord,
    setDefinition,
    game,
    setGame,
    language
  } = useGameContext();

  useEffect(() => {
    fillArrays();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctWord, language]);

  useEffect(() => {
    async function defineWord() {

      const response = await fetch(`/.netlify/functions/define?word=${queryWord}`);
      const json = await response.json();

      setDefinition(json);
    }

    defineWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctWord]);

  function fillArrays() {
    console.log('|| correctWord', correctWord);
    // setGame([]);
    // if ((game[0].length > 0)) {
    const newRowArr = new Array(correctWord.length).fill({
      letter: '',
      letterInCorrectWord: false,
      letterInCorrectWordAndRightPlace: false
    });
    const newGameArray = game.map(() => newRowArr);
    setGame([...newGameArray]);
    // }
  }

  return (
    <form className='game-row'>
      {
        currentRow.map((letterObj, i) => <Square letterObj={ letterObj} key={letterObj + i} />)
      }
    </form>
  );
}