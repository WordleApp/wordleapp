import { useEffect } from 'react';
import { useGameContext } from '../GameProvider';
import './Game.css';
import Row from '../Row/Row';
import { updateUserScore } from '../services/fetch-utils.js';

export default function Game() {
  const {
    correctWord, setCorrectWord,
    guessedWord, setGuessedWord,
    game, setGame,
    row, setRow,
    queryWord, language,
    isWin, setIsWin,
    isLoss, setIsLoss,
  } = useGameContext();

  useEffect(() => {
    async function translateWord() {
      const response = await fetch(`/.netlify/functions/translate?word=${queryWord}`);
      const json = await response.json();
      await setCorrectWord(json[0].translations[0].text);
    }

    translateWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultStuff = {
    letterIsWrong: false,
    letterInCorrectWord: false,
    letterInCorrectWordAndRightPlace: false
  }

    function setGameState(input) {
    let guessArray = input.split('');
    setGuessedWord(input);
    // it's a little icky that your array is called 'obj'. I would've guess this wass an object :)
    let obj = guessArray.map((letter) => {
      return {
        ...defaultStuff,
        letter,
      };
    });
    // oohhh, don't see a lot of while loops out there! seems like you could have done this with another map? or even a `new Array(obj.length).fill(letterObject)` ?
    while (obj.length < correctWord.length) {
      obj.push({
        ...defaultStuff,
        letter: '',
      });
    }
    game[row] = obj;
    setGame([...game]);
  }

  async function gameOver() {
    await updateUserScore(60 - (row * 10));
  }

  function checkGuess() {
    let rightWord = correctWord.split('');
    let guessWord = game[row].map((obj) => obj.letter);
    for (let i = 0; i < guessWord.length; i++) {
      game[row][i].letterIsWrong = true;
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
    checkWin();
    if (guessedWord.toLowerCase() === correctWord.toLowerCase()){
      setIsWin(true);
      gameOver();
    }
  }

  function checkWin(){
    setIsLoss(row > 4)
  }

  function newGame(){
    setRow(0);
    setGame([[], [], [], [], [], []]);
  }

  function checkLanguage(language) {
    const languageMap = {
      fr: 'French',
      es: 'Spanish',
      'pt-pt': 'Portuguese',
      'de': 'German'
    }

    return languageMap[language]
  }

  return (
    <>
      <div className="entire-game">
        <h1>Wordlé <span>~aka~</span> Word Leapp</h1>
        <h3 ><span>{checkLanguage(language)} word for: </span> <span id='definition'>{queryWord.toUpperCase()}</span></h3>
        <form onSubmit={e => handleGuess(e)}>
          <input
            value={guessedWord}
            id='invisible-guess'
            className='invisible-guess'
            onChange={e => setGameState(e.target.value)}
            maxLength={correctWord.length}
            minLength={correctWord.length}
            required
            autoFocus
          />
        </form>
        {
          game.map((currentRow, i) => <Row currentRow={currentRow} key={currentRow + i} y={i} />)
        }
      </div>
      <form
        onSubmit={newGame}
        className=
          {`
          modal
          ${isWin || isLoss ? 'visible' : 'hidden'}
        `}>
        <div className="game-over-div">
          {
            isWin
              ? <h1>You Win</h1>
              : <h1>Game Over</h1>
          }
          <div className="data-vis">
            <p className='correct-word-p'><span>The word was:</span></p>
            <h1 className="correct-word">{correctWord}</h1>
          </div>
          <button onClick={newGame} className='new-game-button'>New Game</button>
        </div>
      </form>
    </>
  );
}