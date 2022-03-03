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
    location, setLocation,
    language, setLanguage,
    queryWord,
    correctWord, setCorrectWord
  } = useGameContext();

  function handleLogout() {
    logout();

    setUser('');
  }

  useEffect(() => {
    async function getUserData(){
      const currentUser = await getUser();

      setUser(currentUser);
    }
    getUserData();
  }, []);

  useEffect(() => {
    const index = Math.floor(Math.random() * commonWords.length);
    setQueryWord(commonWords[index]);
    
  }, []);

  function aboutUs(){
    setLocation('/about-us');  
  }
  
  function game(){
    setLocation('/game');
  }

  function statistics(){
    setLocation('/statistics');
  }

  async function handleLanguageSelect(e) {
    e.preventDefault();
    setLanguage(e.target.value);
    const response = await fetch(`/.netlify/functions/translate?to=${language}&word=${queryWord}`);
    const json = await response.json();
    setCorrectWord(json[0].translations[0].text);
    console.log('|| json[0]', response);
  }
  console.log('|| language', language);
  console.log('|| correctWord', correctWord);

  return (
    <Router>
      <div>
        {
          !user
            ? <header>
              <ul>
                <li className='nav-link'><NavLink to='about'>About</NavLink></li>
              </ul>
            </header>
            : <header>
              <ul>
                <li>
                  <select className='language-selector' onChange={handleLanguageSelect}>
                    <option value='fr'>French</option>
                    <option value='es'>Spanish</option>
                    <option value='it'>Italian</option>
                    <option value='pt-pt'>Portuguese</option>
                    <option value='de'>German</option>
                  </select>
                </li>
                <li>
                  <NavLink onClick={game} to='/game'>Game</NavLink>
                </li>
                <li>
                  <NavLink onClick={aboutUs} to='/about-us'>About Us</NavLink>
                </li>
                <li>
                  <NavLink onClick={statistics} to='/statistics'>Statistics</NavLink>
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