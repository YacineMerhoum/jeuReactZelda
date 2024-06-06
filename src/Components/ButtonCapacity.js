import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hitBack,
  hitMonster,
  superhit,
  manaSuperHit,
  addIdIsPlayerAttacking,
  removetour,
  healPlayer,
} from "../features/fight/fightSlice";
import { current } from "@reduxjs/toolkit";

const ButtonCapacity = ({ player, imageRef, name }) => {
  const [pv, setPv] = useState(100);

  const [isSuperButtonVisible, setIsSuperButtonVisible] = useState(true);
  const dispatch = useDispatch();
  const superButtonRef = useRef(null);
  const [showHealText, setShowHealText] = useState(false);
  const [showPvText, setShowPvText] = useState(false);
  const [niceHit, setNiceHit] = useState(false);
  const [superAtkReady, setSuperAtkReady] = useState(false);

  const state = useSelector((state) => state.fight);

  function verifPlayer(idplayer, isPlayerAttacking) {
    console.log(isPlayerAttacking);
    let allowed = true;
    let nbPlayersAlive = 0;
    state.players.map((player) => {
      if (player.pv > 0) {
        nbPlayersAlive++;
      }
    });
    if (isPlayerAttacking.length === nbPlayersAlive) {
      dispatch(removetour());
    } else {
      isPlayerAttacking.map((player) => {
        if (player === idplayer) {
          allowed = false;
        }
      });
    }
    return allowed;
  }

  const heroesDefait = () => {
    imageRef.current.classList.add("heroesDefait");
  };

  const HandlePotionUp = () => {
    imageRef.current.classList.add("soin");
    setShowHealText(true);
    dispatch(healPlayer({ playerId: player, soin: 25 }));
    console.log(healPlayer, "Potion activée !");
    setTimeout(() => {
      imageRef.current.classList.remove("soin");
    }, 3000);
    setTimeout(() => {
      setShowHealText(false);
    }, 1500);
  };

  const superAttaque = () => {
    setIsSuperButtonVisible(false);

    imageRef.current.classList.add("playerSuperAttack");
    document.getElementById("root").classList.add("bg-black");

    setTimeout(() => {
      // Le temps de l'attaque une fois lancé

      setNiceHit(true);
      setTimeout(() => {
        setNiceHit(false);
      }, 1500);
      console.log("La super attaque à frappée !");
      setTimeout(() => {
        document.getElementById("root").classList.add("bg-red");
      }, 50);
      const superHitAleatoire = [ 50,60,70,80,90,100,110,120,130,140,150,200 ]
      const getRandomHitSp = () => {
        const randomIndex = Math.floor(Math.random() * superHitAleatoire.length);
        return superHitAleatoire[randomIndex] }
      dispatch(superhit(getRandomHitSp()));
      dispatch(
        manaSuperHit({
          playerId: player,
          attack: 10,
        })
      );
      console.log("La mana descend suite à l'attaque");
    }, 2000);
    setTimeout(() => {
      imageRef.current.classList.remove("playerSuperAttack");
      document.getElementById("root").classList.remove("bg-red");
      document.getElementById("root").classList.remove("bg-black");
    }, 2500);
  };

  const pvs = useSelector((state) => state.fight.players[player].pv);
  const combat = () => {
    if (pv <= 0) return;
    if (verifPlayer(player, state.isPlayerAttacking)) {
      setTimeout(() => {
        if (superButtonRef.current) {
          superButtonRef.current.classList.add("superAttaqueAnim");
          console.log("la super attaque est prête");
          setSuperAtkReady(true);
        }
      }, 5000);

      dispatch(hitMonster(15));

      console.log("Le user attaque !");

      const timeout = 1500;

      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.add("animationDamage");
        }
        dispatch(
          hitBack({
            playerId: player,
            attack: 45,
          })
        );
        setShowPvText(true);
        setTimeout(() => {
          setShowPvText(false);
        }, 2500);

        setPv((prevPv) => {
          const newPv = prevPv - 15;
          return newPv <= 0 ? 0 : newPv;
        });

        console.log("Le méchant riposte !");

        setTimeout(() => {
          if (imageRef.current) {
            imageRef.current.classList.remove("animationDamage");
          }
        }, 1000);
      }, timeout);
      console.log(pvs, " aaaaaaaaaaaa");
      dispatch(addIdIsPlayerAttacking({ playerId: player }));
    }
  };
  
  const arraySentence = ["COUP CRITIQUE", "TU L'AS DEBOITE !", "BIEN JOUE MEC" , "SUPER EFFICACE !" ,
 , "COUP CRITIQUE" ];
  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * arraySentence.length);
    return arraySentence[randomIndex];
  };

  return (
    <div className="boxButton">
      {superAtkReady && (
        <div className="move-text">
          La super attaque de <span className="spanName">{name}</span> est PRÊTE
          !
        </div>
      )}
      {niceHit && (
        <div className="critical-hit-text">{getRandomSentence()}</div>
      )}
      {pvs > 0 ? (
        <div>
          <div className="flex space-x-4 justify-center ms-5 mb-5">
            <button
              type="button"
              title="Attaque simple qui inflige 5 de dégât au monstre"
              className="w-40 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75"
              onClick={combat}
            >
              Attaque
              <i className="fas fa-bomb"></i>
              <i className="fas fa-fire-alt"></i>
            </button>
            {showPvText && <div className="pv-text">-45</div>}
            <button
              type="button"
              title="Potion qui recharge les pv de votre héro de 25pv"
              className="w-40 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
              onClick={HandlePotionUp}
            >
              Potion
              <i className="fas fa-flask"></i>
              <i className="fas fa-magic"></i>
            </button>
            {showHealText && <div className="heal-text">+25</div>}
          </div>
          {isSuperButtonVisible && (
            <div className="flex justify-center">
              <button
                className="w-40 buttonNone mb-5 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75"
                type="button"
                title="SUPER ATTAQUE qui inflige de lourds dégats au monstre ATTENTION UTILISABLE UNE FOIS!"
                onClick={superAttaque}
                ref={superButtonRef}
              >
                Super Attaque
              </button>
            </div>
          )}
        </div>
      ) : (
        <p ref={heroesDefait} className="text-white defaitPlayer mb-5 ms-16">
          {player.name} Le joueur a perdu !
        </p>
      )}
    </div>
  );
};

export default ButtonCapacity;
