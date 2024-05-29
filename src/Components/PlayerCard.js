import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';

const PlayerCard = ({ player }) => {
  
  return (
    
    <div key={player.id} className="col-sm-3 card center" id={`joueur${player.id}`}>
      <div className="card-body text-center">
        <h5 className="card-title text-white heros">{player.name}</h5>
        <img src={player.image}></img>
        <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
        <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
        <span className="badge badge-danger ml-2" id="degatSpanJ1"></span>
        <div className="row">
          <div>
            <ButtonCapacity player={player.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
