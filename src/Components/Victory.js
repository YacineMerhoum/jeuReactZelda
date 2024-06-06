import React, { useRef, useEffect } from 'react';
import ReloadLink from './ReloadLink';

const Victory = () => {
  const overlayNone = useRef();
  const buttonApparation = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (buttonApparation.current) {
        buttonApparation.current.classList.add('startButtonDisplay');
      }
    }, 1000);

    setTimeout(() => {
      if (overlayNone.current) {
        overlayNone.current.classList.add('opening-overlay');
      }
    }, 3000);
  }, []);

  return (
    <div className="opening-overlay" ref={overlayNone}>
      <div className="blur-background2"></div>
      <div className="row">
        <h1 className="ganonDefait">Le BOSS est vaincu</h1>
        <ReloadLink>
          <button
            className="mt-10 startButton text-white font-bold py-2 px-4 rounded"
            ref={buttonApparation}
          >
            Rejouer
          </button>
        </ReloadLink>
      </div>
    </div>
  );
};

export default Victory;
