import React, { useEffect, useRef, useState } from "react";
import LogoZelda from "../Icons/logoZelda.png";

const Opening = () => {
  const displayLogo = useRef();
  const overlayNone = useRef();
  const buttonApparation = useRef();
  

  const handleStart = () => {
    overlayNone.current.classList.add("overlayDisparition");
  };

  setTimeout(() => {
    displayLogo.current.classList.add("logoDisplay");
  }, 1000);
  setTimeout(() => {
    buttonApparation.current.classList.add("startButtonDisplay");
  }, 1000);

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
      </div>
    </div>
  );
};

export default Opening;
