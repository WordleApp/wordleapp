import { useState } from 'react';
import { signIn, signUp } from '../services/fetch-utils';

export default function AuthPage({ setUser }){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleSignIn() {
    const user = await signIn(email, password);
    setUser(user);
  }
  async function handleSignUp() {
    const user = await signUp(email, password);
    setUser(user);
  }

  return (
    <section>
      <form onSubmit={ handleSubmit }>
        <label>
          Email:
          <input value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input value={password} type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type="submit" onClick={ handleSignIn }>Sign In</button>
        <button type="submit" onClick={ handleSignUp }>Sign Up</button>
      </form>
    </section>
  );
}