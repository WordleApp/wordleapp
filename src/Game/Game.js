import { useEffect, useState } from 'react';
import { useGameContext } from '../GameProvider';
import Row from '../Row/Row';
import commonWords from '../common-words';

export default function Game() {
  const { 
    user,
    correctWord,
    setCorrectWord, 
    guessedWord, 
    setGuessedWord 
  } = useGameContext();

  useEffect(() => {
    function fetchWord() {
      const index = Math.floor(Math.random() * commonWords.length);

      setCorrectWord(commonWords[index]);
    }
  
    fetchWord();
  }, [user]);

  return (
    <section>
      {
        <Row />
      }
    </section>

    // <form className='game-row'>
    //   <Row />
    // </form>
  );
}