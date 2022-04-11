import './Statistics.css';
import { useEffect, useState } from 'react';
import { getAllProfiles } from '../services/fetch-utils';

export default function Statistics(){

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayerStats() {
      const users = await getAllProfiles();
      setPlayers(users);
    }
    getPlayerStats();
  }, []);

  return (
    <section className='statistics-section'>
      <div className='table-head'>
        <div className='user head-unit'>user</div>
        <div className='games-played head-unit'>games played</div>
        <div className='score head-unit'>score</div>
      </div>
      <div>
        {
          players.map((player, i) => 
          // without accessing a property like so, this key was probably [Object object]4, since `player` is not a string
            <div className='table-row' key={player.name + i}> 
              <p className="user row-unit">{player.name}</p>
              <p className="games-played row-unit">{player.games_played}</p>
              <p className="score row-unit">{player.total_score}</p>
            </div>
          )
        }
      </div>
    </section>
  );
}