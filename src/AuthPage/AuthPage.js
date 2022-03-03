import { useState } from 'react';
import { signIn, signUp } from '../services/fetch-utils';
import './AuthPage.css';

export default function AuthPage({ setUser }){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleSignIn() {
    const user = await signIn(email, password);
    setUser(user);
  }
  async function handleSignUp() {
    const user = await signUp(email, password, username);
    setUser(user);
  }

  return (
    <section className='auth-section'>
      <h1>Word-Leapp</h1>
      <form onSubmit={ handleSubmit } className='auth-form'>
        <label className='email'>
          Username:
          <input required value={username} onChange={e => setUsername(e.target.value)}className='auth-input' />
        </label>
        <label className='email'>
          Email:
          <input required value={email} onChange={e => setEmail(e.target.value)}className='auth-input' />
        </label>
        <label className='password'>
          Password:
          <input required value={password} type="password" onChange={e => setPassword(e.target.value)}className='auth-input' />
        </label>
        <div className="button-div">
          <button type="submit" onClick={ handleSignIn }>Sign In</button>
          <button type="submit" onClick={ handleSignUp }>Sign Up</button>
        </div>
      </form>
    </section>
  );
}