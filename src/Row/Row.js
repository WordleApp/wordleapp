// import { render } from '@testing-library/react';
import { useGameContext } from '../GameProvider';
import Square from '../Square/Square';
import { useEffect } from 'react';
import './Row.css';

export default function Row({ currentRow }){
  const {
    correctWord,
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
      // very cool use of Array.fill!
    const newRowArr = new Array(correctWord.length).fill({
      letter: '',
      letterInCorrectWord: false,
      // some might call this verbose, but i actually like this kind of naming
      letterInCorrectWordAndRightPlace: false
    });
    const newGameArray = game.map(() => newRowArr); // interesting--so just makes an array of arrays equal to the length of new game array?
    setGame([...newGameArray]);
  }

  return (
    <form className='game-row'>
      {
        currentRow.map((letterObj, i) => <Square letterObj={ letterObj} key={letterObj + i} />)
      }
    </form>
  );
}