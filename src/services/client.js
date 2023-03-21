import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_PROJECT_URL,
  process.env.REACT_APP_ANON_PUBLIC_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
