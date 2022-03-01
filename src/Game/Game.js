import { useEffect, useState } from 'react';
import { useGameContext } from '../GameProvider';
import Row from '../Row/Row';
import commonWords from '../common-words';

export default function Game() {
  const { correctWord, setCorrectWord, guessedWord, setGuessedWord } = useGameContext();
  
  useEffect(() => {
    function fetchWord() {
      const index = Math.floor(Math.random() * commonWords.length);

      setCorrectWord(commonWords[index]);
    }
  
    fetchWord();
  }, []);


  return (
    <form>
      <Row correctWord={correctWord} />
    </form>
  );
}