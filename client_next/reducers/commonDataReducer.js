
const INITIAL_STATE = {
   categories: null,
   tags: null,
   levels: null
};

function commonDataReducer (state = INITIAL_STATE, action){

   if(action.type === 'SET_COMMON_DATA'){
      const {categories, tags, levels} = action.payload;
      return{
         ...state,
         categories, 
         tags, 
         levels
      }
   }

   return state;
}

export default commonDataReducer;