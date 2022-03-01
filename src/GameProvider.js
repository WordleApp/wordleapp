import {
  createContext,
  useContext,
  useState,
} from 'react';
import commonWords from './common-words';

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [wordPool, setWordPool] = useState(commonWords);
  const [correctWord, setCorrectWord] = useState('apple');
  const [guessedWord, setGuessedWord] = useState();
  const [user, setUser] = useState();
  const [rows, setRows] = useState();


  const gameState = {
    wordPool, setWordPool,
    correctWord, setCorrectWord,
    guessedWord, setGuessedWord,
    user, setUser,
    rows, setRows
  };

  return (
    <GameContext.Provider value={gameState}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}