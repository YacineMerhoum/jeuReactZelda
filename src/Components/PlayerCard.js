import React, { useRef } from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';

const PlayerCard = ({ player  }) => {
  const imageRef = useRef(null);
  console.log('playercard ref', imageRef);
  return (
    <div key={player.id} className="col-sm-3 card center divHeros" id={`joueur${player.id}`}>
      <div className="card-body text-center">
        <h5 className="card-title text-white heros">{player.name}</h5>
        <img src={player.image} ref={imageRef}></img>
        <ProgressBar  pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
        <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
        <span className="badge badge-danger ml-2" id="degatSpanJ1"></span>
        <div className="row">
          <div>
            <ButtonCapacity player={player.id} pv={player.pv} name={player.name} imageRef={imageRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
