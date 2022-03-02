import {
  createContext,
  useContext,
  useState,
} from 'react';
import commonWords from './common-words';

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [wordPool, setWordPool] = useState(commonWords);
  // queryWord: word pulled from wordPool, sent to both netlify functions
  // correctWord: word returned from translator
  // definition: definition returned from define
  // guessedWord: user submitted guess
  const [queryWord, setQueryWord] = useState('');
  const [correctWord, setCorrectWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [guessedWord, setGuessedWord] = useState();
  const [user, setUser] = useState();
  const [row, setRow] = useState(0);
  const [columns, setColumns] = useState(0);
  const [game, setGame] = useState([[], [], [], [], [], []]);



  const gameState = {
    wordPool, setWordPool,
    queryWord, setQueryWord,
    definition, setDefinition,
    correctWord, setCorrectWord,
    guessedWord, setGuessedWord,
    user, setUser,
    row, setRow,
    columns, setColumns,
    game, setGame
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