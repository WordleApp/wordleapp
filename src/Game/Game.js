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
    queryWord,
    setQueryWord,
    definition,
    setDefinition,
    correctWord,
    setCorrectWord,
    guessedWord,
    setGuessedWord,
    fieldValue,
    setFieldValue,
  } = useGameContext();

  useEffect(() => {
    async function translateWord() {
      console.log('queryWord', queryWord);
      const response = await fetch(`/.netlify/functions/translate?word=${queryWord}`);
      const json = await response.json();
      setCorrectWord(json[0].translations[0].text);
    }

    translateWord();

  }, []);

  function setGameState(input) {
    let guessArray = input.split('');
    setGuessedWord(input);
    let obj = guessArray.map((letter) => {
      return {
        letter: letter,
        letterInCorrectWord: false,
        letterInCorrectWordAndRightPlace: false
      };
    });
    while (obj.length < correctWord.length) {
      obj.push({
        letter: '',
        letterInCorrectWord: false,
        letterInCorrectWordAndRightPlace: false
      });
    }
    game[row] = obj;
    setGame([...game]);
  }

  function checkGuess() {
    let rightWord = correctWord.split('');
    let guessWord = game[row].map((obj) => obj.letter);
    for (let i = 0; i < guessWord.length; i++) {
      if (rightWord.includes(guessWord[i])) {
        game[row][i].letterInCorrectWord = true;
      }
      if (guessWord.indexOf(guessWord[i]) === rightWord.indexOf(guessWord[i])) {
        game[row][i].letterInCorrectWordAndRightPlace = true;
      }
    }
    setGame([...game]);
  }

  async function handleGuess(e) {
    e.preventDefault();
    setGuessedWord('');
    checkGuess();
    setRow(row + 1);
  }

  return (
    <div className="entire-game">
      <form onSubmit={e => handleGuess(e)}>
        <input value={guessedWord} id='invisible-guess' className='invisible-guess' autoFocus onChange={e => setGameState(e.target.value)} maxLength={correctWord.length}/>
      </form>
      {
        game.map((currentRow, i) => <Row currentRow={currentRow} key={currentRow + i} y={i} />)
      }
    </div>
  );
}