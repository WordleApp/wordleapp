import { client, checkError } from './client';

export async function getUser(){
  return client.auth.session() && client.auth.session().user;
}

export async function signUp(email, password, username){
  const response = await client.auth.signUp({ email, password });

  await client
    .from('profiles')
    .insert([{
      name: username,
    }]);

  return response.user;
}

export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location = '../';
}

export async function getUserProfile() {
  const user = await getUser();
  const profile = await client
    .from('profiles')
    .select()
    .match({ user_id: user.id });
  return checkError(profile);
}

export async function getAllProfiles() {
  const profile = await client
    .from('profiles')
    .select();
  return checkError(profile);
}

export async function updateUserScore(score) {
  const user = await getUser();
  const profile = await getUserProfile();
  const response = await client
    .from('profiles')
    .update({
      games_played: profile[0].games_played + 1,
      total_score: profile[0].total_score + score
    })
    .match({ user_id: user.id });
  return checkError(response);
}
