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
    async function fetchWord() {
      const index = Math.floor(Math.random() * commonWords.length);
      const response = await fetch(`/.netlify/functions/translate?word=${commonWords[index]}`);
      const json = await response.json();
      console.log(json);
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

  async function handleGuess(e) {
    e.preventDefault();
    let word = game[row].join('');

    // put the jsonified data in state and set the loading state to false
    // const json = await response.json();
    // console.log(json);
    setRow(row + 1);
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