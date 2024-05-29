import { createSlice } from "@reduxjs/toolkit";
import ImgLink from "../../Icons/Link_cartoon.png"
import ImgRevali from "../../Icons/revali.png"
import ImgMipha from "../../Icons/MIpha.png"
import ImgRiju from "../../Icons/riju.png"


const initialState = {
  players: [
    { name: "Link", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 , image: ImgLink },
    { name: "Revali", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 , image:ImgRevali },
    { name: "Mipha", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 , image:ImgMipha },
    { name: "Riju", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 , image:ImgRiju }
  ],
  monster: {
    name: 'Ganondorf',
    description: "le malin",
    pv: '100',
    pvMax: '100'
  },
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      const damage = action.payload;
      return {
        ...state,
        monster: {
          ...state.monster,
          pv: (state.monster.pv - damage)
        }
      };
    },
    hitBack: (state, action) => {
      const { playerId, attack } = action.payload;
      console.log();
      return {
        ...state,
        players: state.players.map(player => {
          if (player.id === playerId) {
            return {
              ...player,
              pv: player.pv - attack
            };
          }
          return player;
        })
      };
    }
  }
});

export const { hitMonster, hitBack } = fightSlice.actions;
export default fightSlice.reducer;
