import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';

const PlayerList = () => {
  const players = useSelector(state => state.fight.players);
  

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
}

export default PlayerList;
