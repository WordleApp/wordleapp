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
    row,
    setRow,
    columns,
    setColumns,
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
  }, []);



  function setGameState(input) {
    let guessArray = input.split('');
    while (guessArray.length < correctWord.length) {
      guessArray.push('');
    }
    game[row] = guessArray;
    setGame([...game]);
  }

  function handleGuess(e) {
    e.preventDefault();
    // on submit, this function should compare the array from setGameState to the array of correctWord.split() and change tile colors accordingly
    // e => setGuessedWord(e.target.value)

  }

  return (
    <div className="entire-game">
      <form onSubmit={e => handleGuess(e)}>
        <input className='invisible-guess' autoFocus onChange={e => setGameState(e.target.value)} maxLength={correctWord.length}/>
      </form>
      {
        game.map((currentRow, i) => <Row currentRow={currentRow} key={currentRow + i} y={i} />)
      }
    </div>
  );
}