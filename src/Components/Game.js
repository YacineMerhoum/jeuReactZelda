import React from 'react';
import './Game.css';
import Monster from './Monster';

import PlayerList from './PlayerList';
import Opening from './Opening';


const App = () => (
        <>
        
        <div className="App">
        <Monster />
        
        <Opening />
        <section className="container-fluid">
          <PlayerList />
          
        </section >
        </div>
        </>
 )
  

export default App;