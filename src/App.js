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
// import userEvent from '@testing-library/user-event';
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

  return (
    <Router>
      <div>
        {
          !user
            ? <header></header>
            : <header>
              <ul>
                <li>
                  {
                    location !== '/about-us'
                      && <NavLink onClick={aboutUs} to='/about-us'>About Us</NavLink>
                  }
                </li>
                <li>
                  {
                    location !== '/game'
                      && <NavLink onClick={game} to='/game'>Game</NavLink>
                  }
                </li>
                <li>
                  {
                    location !== '/statistics'
                      && <NavLink onClick={statistics} to='/statistics'>Statistics</NavLink>
                  }
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
