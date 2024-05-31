import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hitBack, hitMonster, superhit, manaSuperHit } from '../features/fight/fightSlice';

const ButtonCapacity = ({ player, imageRef }) => {
    const [pv, setPv] = useState(100);
    const [isSuperButtonVisible, setIsSuperButtonVisible] = useState(true);
    const dispatch = useDispatch();
    const superButtonRef = useRef(null);

    const superAttaque = () => {
        setIsSuperButtonVisible(false);

        imageRef.current.classList.add('playerSuperAttack');
        setTimeout(() => {
            // Le temps de l'attaque une fois lancé 
            dispatch(superhit(50));
            console.log("La super attaque à frappée !");
            dispatch(manaSuperHit({
                playerId: player,
                attack: 10
            }));
            console.log("La mana descend suite à l'attaque");
        }, 2000);
        setTimeout(() => {
            imageRef.current.classList.remove('playerSuperAttack');
        }, 2500);
    };

    const combat = () => {
        setTimeout(() => {
            if (superButtonRef.current) {
                superButtonRef.current.classList.add("superAttaqueAnim");
                console.log("la super attaque est prête");
            }
        }, 5000);

        dispatch(hitMonster(4));
        console.log("Le user attaque !");

        const timeout = 1500;
        setTimeout(() => {
            if (imageRef.current) {
                imageRef.current.classList.add('animationDamage');
            }
            dispatch(hitBack({
                playerId: player,
                attack: 15
            }));

            setPv(prevPv => {
                const newPv = prevPv - 15;
                return newPv <= 0 ? 0 : newPv;
            });

            console.log('Le méchant riposte !');

            setTimeout(() => {
                if (imageRef.current) {
                    imageRef.current.classList.remove('animationDamage');
                }
            }, 1000);
        }, timeout);
    };

    return (
        <div className='boxButton'>
            {pv > 0 ? (
                <div className="flex space-x-4">
                    <button
                        type="button"
                        className='w-40 mb-5 g-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75'
                        onClick={combat}
                    >
                        Attaque
                        <i className="fas fa-bomb"></i>
                        <i className="fas fa-fire-alt"></i>
                    </button>
                    {isSuperButtonVisible && (
                        <button
                            className="w-40 buttonNone mb-5 g-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75"
                            type="button"
                            onClick={superAttaque}
                            ref={superButtonRef}
                        >
                            Super Attaque
                        </button>
                    )}
                </div>
            ) : (
                <p className='text-white defaitPlayer mb-5'>{player.name} Le joueur a perdu !</p>
            )}
        </div>
    );
};

export default ButtonCapacity;
