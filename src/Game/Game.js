import { useState } from 'react';
import { useGameContext } from '../GameProvider';
import Row from '../Row/Row';

export default function Game() {
  const { correctWord, setCorrectWord, guessedWord, setGuessedWord } = useGameContext();

  return (
    <form>
      <Row correctWord={correctWord} />
    </form>
  );
}