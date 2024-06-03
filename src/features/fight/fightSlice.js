import { createSlice } from "@reduxjs/toolkit";
import ImgLink from "../../Icons/Link_cartoon.png";
import ImgRevali from "../../Icons/revali.png";
import ImgMipha from "../../Icons/MIpha.png";
import ImgRiju from "../../Icons/riju.png";


const initialState = {
  players: [
    { name: "Link", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, image: ImgLink },
    { name: "Revali", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, image: ImgRevali },
    { name: "Mipha", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, image: ImgMipha },
    { name: "Riju", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, image: ImgRiju }
  ],
  monster: {
    name: 'Ganondorf',
    description: "le malin",
    pv: 500,
    pvMax: 500
  },
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      const damage = action.payload;
      state.monster.pv -= damage;
    },
    
    hitBack: (state, action) => {
      const { playerId, attack } = action.payload;
      state.players = state.players.map(player => {
        if (player.id === playerId) {
          player.pv -= attack;
        }
        return player;
      });
    },
    superhit: (state, action) => {
      const damage = action.payload;
      state.monster.pv -= damage;
    },
    manaSuperHit: (state, action) => {
      const { playerId, attack } = action.payload;
      state.players = state.players.map(player => {
        if (player.id === playerId) {
          player.mana -= attack;
        }
        return player;
      });
    },
  
  }


});

export const { hitMonster , hitBack, superhit , manaSuperHit } = fightSlice.actions;
export default fightSlice.reducer;
