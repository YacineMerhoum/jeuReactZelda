import React, { useEffect, useRef, useState } from "react";
import LogoZelda from "../Icons/logoZelda.png";

const Opening = () => {
  const displayLogo = useRef();
  const overlayNone = useRef();
  const buttonApparation = useRef();
  const astucesGames = useRef();

  const handleStart = () => {
    overlayNone.current.classList.add("overlayDisparition");
  };

  setTimeout(() => {
    displayLogo.current.classList.add("logoDisplay");
  }, 1000);
  setTimeout(() => {
    buttonApparation.current.classList.add("startButtonDisplay");
  }, 1000);
  setTimeout(() => {
    astucesGames.current.classList.add("astuceText");
  }, 2500);

  const astuces = [
    "Les potions sont illimitées, protitez-en pour soigner vos héros !",
    "Les dégâts d'une SUPER ATTAQUE sont aléatoires. Utilisez-la au bon moment, car elle est limitée à une seule utilisation !",
    "Une fois morts, vos héros sont indisponibles pour combattre. Soyez stratégiques !",
    "Ganondorf inflige de lourds dégâts à vos héros. Faites attention !",
    "Si vous voulez en savoir plus sur les attaques, passez votre souris dessus ; des informations s'afficheront.",
    "Une potion rapporte 25pv à votre héro ! Profitez-en, elles sont illimitées !"
  ];
  const getAstuces = () => {
    const astucesIndex = Math.floor(Math.random() * astuces.length);
    return astuces[astucesIndex];
  };
  return (
    <div className="opening-overlay" ref={overlayNone}>
      <div className="blur-background"></div>
      <div className="row">
        <img src={LogoZelda} alt="Logo" className="logo" ref={displayLogo} />

        <button
          className="mt-10 startButton  text-white font-bold py-2 px-4 rounded"
          onClick={handleStart}
          ref={buttonApparation}
        >
          Start
        </button>
        <div className="flex justify-between">
          <div className="w-1/3"></div>
          <div className="w-1/3 flex flex-col items-center">
            <div className="opening-overlay" ref={overlayNone}>
  <div className="blur-background"></div>
  <div className="flex flex-col items-center justify-center h-screen">
    <img src={LogoZelda} alt="Logo" className="logo mb-10" ref={displayLogo} />

    <button
      className="startButton text-white font-bold py-2 px-4 rounded mb-10"
      onClick={handleStart}
      ref={buttonApparation}
    >
      Start
    </button>

    <div className="flex justify-between w-full">
      <div className="w-1/3"></div>
      <div className="w-1/3 flex flex-col items-center">
        <div className="mt-5">
          <h1 ref={astucesGames} className="">
            <em>Astuces : {getAstuces()}</em>
          </h1>
        </div>
      </div>
      <div className="w-1/3"></div>
    </div>
  </div>
</div>

          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
