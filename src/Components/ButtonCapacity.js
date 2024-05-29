import React from 'react';
import { useDispatch } from 'react-redux';
import { hitBack, hitMonster } from '../features/fight/fightSlice';



const ButtonCapacity = props => {
     const dispatch = useDispatch()
     const combat = () => {
        dispatch(hitMonster(4))
        console.log("Le user attaque !");
        
        
        const timeout = 2000;
        setTimeout(() => {
            dispatch(hitBack({ 
                playerId:props.player,
                attack:5
            }))
            console.log('Le méchant riposte !')
            
        }, timeout);
        
    }
   
        return (
            <>
            <button type="button" 
            className='g-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' 
            onClick={combat} >
                Attaque du USER
            <i className="fas fa-bomb"></i> 5
        <i className="fas fa-fire-alt"></i> - 5
            </button>
        
            </>
        )
    }





export default ButtonCapacity;