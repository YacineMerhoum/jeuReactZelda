import React from 'react';
import './Game.css';
import Monster from './Monster';

import PlayerList from './PlayerList';


const App = () => (
        <div className="App">
        <Monster />
        
         
        <section className="container-fluid">
          <PlayerList />
          
        </section >
        </div>
 )
  

export default App;