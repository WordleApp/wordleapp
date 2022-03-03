import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import { getUser, logout } from './services/fetch-utils';
import { useEffect, useState } from 'react';
import './App.css';
// import userEvent from '@testing-library/user-event';
import AuthPage from './AuthPage/AuthPage';
import { useGameContext } from './GameProvider';
import Game from './Game/Game';
import commonWords from './common-words';

function App() {
  const {
    user, setUser, 
    queryWord, setQueryWord,
    fieldValue, setFieldValue,
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

  
  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyPress);
  // }, []);

  // function handleKeyPress(e) {
  //   console.log(e.key);

  // }

  return (
    <Router>
      <div>
        {
          !user
            ? <header></header>
            : <header>
              <ul>
                <li className='nav-link'><NavLink to='#'>One</NavLink></li>
                <li className='nav-link'><NavLink to='#'>Two</NavLink></li>
                <li className='nav-link'><NavLink to='#'>Three</NavLink></li>
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
            <Route></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
