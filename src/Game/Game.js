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
      // console.log(json);
      setCorrectWord(json[0].translations[0].text);
    }

    translateWord();

    // setGameState();
  }, []);

  function setGameState(input) {
    let guessArray = input.split('');
    setGuessedWord(input);
    while (guessArray.length < correctWord.length) {
      guessArray.push('');
    }
    game[row] = guessArray;
    setGame([...game]);
  }


  async function handleGuess(e) {
    e.preventDefault();
  
    setGuessedWord('');
    let word = game[row].join('');
    console.log(word);

    // put the jsonified data in state and set the loading state to false
    // const json = await response.json();
    // console.log(json);
    setRow(row + 1);
  }

  // const handleBlur = (e) => setFieldValue(e.target.value);
  // console.log(fieldValue);


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