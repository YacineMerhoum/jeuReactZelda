import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import MonsterIcon from '../Icons/ganondorf.png';
import DefaitGanon from './DefaitGanon';


const Monster = () => {
  const monster = useSelector((state) => state.fight.monster);
  const monsterImageRef = useRef();
  const prevPv = useRef(monster.pv);
  const [defeat , setDefeat] = useState(false)




  

  useEffect(() => {
    if (monster.pv < prevPv.current){
      monsterImageRef.current.classList.add('animationDamage2');
    }
    
    setTimeout(() => {
          if (monsterImageRef.current) {
            monsterImageRef.current.classList.remove('animationDamage2');
          }    
      
         
  }, 1000);

  }, [monster.pv])

  useEffect(() => {
    if (monster.pv <= 0 ) {
      monsterImageRef.current.classList.add('BossDefait')
      setDefeat(true)
      
      }
  }, [monster.pv])
  

  return (
    <section>
      { defeat ?  (
        <DefaitGanon /> 
      ) : (   
      <div className="container">
        <div className="row">
          <div className="card-monstre col-sm-12">
            <div id="monsterCard" className="text-center">
              <div className="flex justify-center">
                <div className="row">
                  <div className="col-sm-2 offset-sm-3">
                    <span className="badge badge-danger ml-2" id="degatSpanMonster"></span>
                    
                    <img
                      className="img-fluid"
                      ref={monsterImageRef}
                      src={MonsterIcon}
                      alt="monster"
                    />
                    
                  </div>
                  <div id="comboOnMonster" className="col-sm-6"></div>
                </div>
              </div>
              <h1 className="ganondorf">{monster.name}</h1>
              <p className="description">{monster.description}</p>
              <div className="mb-10">
                <ProgressBar
                  pv={monster.pv}
                  
                  pvMax={monster.pvMax}
                  bgType="bg-danger"
                  faType="fa-heart"
                  barName=" : pv"
                />
              </div>
             
              
            
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
};

export default Monster;
