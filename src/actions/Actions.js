export const hitMonster = function (state , damage){
    const damage = action.payload;
      state.monster.pv -= damage;


}