// This is some very clean code! I love the component decomposition boundaries you selected, as well as your adherence to the single responsibility principle. I generally judge code based on how easy it would be to inherit this project, and this one passes that tests with flying colors. It's also impressive to see how much you did with so little code. Great work!

/* eslint-disable react-hooks/exhaustive-deps */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import { getUser, logout } from './services/fetch-utils';
import { useEffect } from 'react';
import './App.css';
import AuthPage from './AuthPage/AuthPage';
import { useGameContext } from './GameProvider';
import Game from './Game/Game';
import commonWords from './common-words';
import AboutUs from './AboutUs/AboutUs';
import Statistics from './Statistics/Statistics';

function App() {
  const {
    user, setUser,
    setQueryWord,
    language, setLanguage,
    queryWord,
    setRow,
    setCorrectWord,
  } = useGameContext();

  // i like useEffect to be first of the functions called after state
  useEffect(() => {
    async function getUserData(){
      const currentUser = await getUser();

      setUser(currentUser);
    }
    getUserData();

    // seems like all of these can go in the same useEffect if they all occur 'on load'
    const index = Math.floor(Math.random() * commonWords.length);
    setQueryWord(commonWords[index]);
    setLanguage(`fr`);
    translateWord();
    setRow(0);


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLogout() {
    logout();

    setUser('');
  }


  async function translateWord() {
    const response = await fetch(`/.netlify/functions/translate?to=${language}&word=${queryWord}`);
    const json = await response.json();
    // console.log('diacritics not removed', json[0].translations[0].text);
    let word = json[0].translations[0].text;
    // wow, very nice work solving an interesting problem
    word = word.normalize('NFD').replace(/\p{Diacritic}/gu, '');
    // console.log('diacritics translated', word);
    setCorrectWord(word);
  }

  useEffect(() => {
    translateWord();

  }, [language]);

  async function handleLanguageSelect(e) {
    e.preventDefault();
    setLanguage(e.target.value);
    translateWord();
    setRow(0);
  }

  return (
    <Router>
      <div className='wrapper'>
        {
          !user
            ? <header>
            </header>
            : <header>
              <ul>
                <li>
                  <select
                    className='language-selector'
                    onChange={(handleLanguageSelect)}>
                    <option value='fr'>French</option>
                    <option value='es'>Spanish</option>
                    <option value='it'>Italian</option>
                    <option value='pt-pt'>Portuguese</option>
                    <option value='de'>German</option>
                  </select>
                </li>
                <li>
                  <NavLink to='/game'>Game</NavLink>
                </li>
                <li>
                  <NavLink to='/about-us'>About Us</NavLink>
                </li>
                <li>
                  <NavLink to='/statistics'>Statistics</NavLink>
                </li>
                <li>
                  <NavLink to='/' onClick={ handleLogout }>Logout</NavLink>
                </li>
              </ul>
            </header>
        }

        <main>
          <Switch>
            <Route exact path='/'>
              {
                !user
                  ? <AuthPage setUser={setUser} />
                  : <Redirect to='/game' />
              }
            </Route>
            <Route exact path='/game'>
              {
                !user
                  ? <Redirect to='/' />
                  : <Game />
              }
            </Route>
            <Route exact path='/about-us'>
              {
                !user
                  ? <Redirect to='/' />
                  : <AboutUs />
              }
            </Route>
            <Route exact path='/statistics'>
              {
                !user
                  ? <Redirect to='/' />
                  : <Statistics />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;