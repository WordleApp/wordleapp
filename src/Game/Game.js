import { useEffect, useState } from 'react';
import { useGameContext } from '../GameProvider';
import './Game.css';
import Row from '../Row/Row';
import commonWords from '../common-words';

export default function Game() {
  const {
    game,
    setGame,
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
    // setGameState();
  }, [user]);

  function setGameState() {
    // const eachRow = new Array(correctWord.length);
    // const newGameArray = game.map(() => eachRow);
    // setGame(newGameArray);
  }

  function handleGuess(e) {
    // e => setGuessedWord(e.target.value)
    console.log(e);
  }

  return (
    <div className="entire-game">
      <input className='invisible-guess' autoFocus onChange={handleGuess} />
      {
        game.map((row, i) => <Row key={row + i} y={i} />)
      }
    </div>
  );
}