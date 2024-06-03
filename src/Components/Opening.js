import React, { useEffect, useRef } from 'react'
import LogoZelda from '../Icons/logoZelda.png'


const Opening = () => {
    const overlayNone = useRef();
    
    const handleStart = () => {
        overlayNone.current.classList.add('overlayDisparition')
    }
    

    return (
       <div className="opening-overlay"
            ref={overlayNone} >
        <div className="blur-background"></div>
            <div className='row'>
            <img src={LogoZelda} alt="Logo" className="logo" />
            <button 
            className="mt-10 startButton  text-white font-bold py-2 px-4 rounded"
            onClick={handleStart}>
                Start
            </button>
            </div>
      </div>
    
  )
}


export default Opening