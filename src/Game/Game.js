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

  

  function setGameState(currentGuess, e) {
    e.preventDefault();
    // as you type, this function should split the letters up into an array, save the array in state, and populate the boxes with the corresponding letters from the array
    // const eachRow = new Array(correctWord.length);
    // const newGameArray = game.map(() => eachRow);
    // setGame(newGameArray);
    const guessArray = currentGuess.split('');

  }

  function handleGuess(e) {
    // on submit, this function should compare the array from setGameState to the array of correctWord.split() and change tile colors accordingly
    // e => setGuessedWord(e.target.value)

  } 

  return (
    <div className="entire-game">
      <form>
        <input className='invisible-guess' autoFocus onChange={e => setGameState(e.target.value)} maxLength={correctWord.length} onSubmit={e => handleGuess(e)} />
      </form>
      {
        game.map((row, i) => <Row key={row + i} y={i} />)
      }
    </div>
  );
}