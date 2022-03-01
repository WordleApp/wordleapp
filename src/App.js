import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import { getUser, logout, getOwnage } from './services/fetch-utils';
import { useEffect, useState } from 'react';
import './App.css';
// import userEvent from '@testing-library/user-event';
import AuthPage from './AuthPage/AuthPage';

function App() {
  const [user, setUser] = useState();

  async function handleLogout() {
    await logout();
    setUser(null);
  }

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
                  <button onClick={ handleLogout }>Logout</button>
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
                  : <Redirect to='#' user={user} />
              }
            </Route>
            <Route>
              {

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
