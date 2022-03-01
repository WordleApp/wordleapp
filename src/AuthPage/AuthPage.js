import { useState } from 'react';
import { signIn, signUp } from '../services/fetch-utils';

export default function AuthPage({ setUser }){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <section>
    </section>
  );
}