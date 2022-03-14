import {
  createContext,
  useContext,
  useState,
} from 'react';
import commonWords from './common-words';

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [wordPool, setWordPool] = useState(commonWords);
  const [fieldValue, setFieldValue] = useState('');
  const [language, setLanguage] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [queryWord, setQueryWord] = useState('');
  const [correctWord, setCorrectWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [guessedWord, setGuessedWord] = useState();
  const [user, setUser] = useState();
  const [row, setRow] = useState(0);
  const [location, setLocation] = useState('/game');
  const [game, setGame] = useState([[], [], [], [], [], []]);
  const [isWin, setIsWin] = useState(false);
  const [isLoss, setIsLoss] = useState(false);

  const gameState = {
    wordPool, setWordPool,
    fieldValue, setFieldValue,
    language, setLanguage,
    currentWord, setCurrentWord,
    queryWord, setQueryWord,
    definition, setDefinition,
    correctWord, setCorrectWord,
    guessedWord, setGuessedWord,
    user, setUser,
    row, setRow,
    location, setLocation,
    game, setGame,
    isWin, setIsWin,
    isLoss, setIsLoss,
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