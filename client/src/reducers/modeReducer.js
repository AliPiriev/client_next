
const INITIAL_STATE = {
   mode: false
};

function modeReducer(state = INITIAL_STATE, action){

   if(action.type === 'TOGGLE_MODE'){
      return {
         ...state,
         mode: !state.mode
      }
   }

   return state;
}

export default modeReducer;