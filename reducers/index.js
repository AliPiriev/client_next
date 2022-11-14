import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';
import modeReducer from './modeReducer';
import commonDataReducer from './commonDataReducer';
import utilsReducer from './utilsReducer';

const rootReducer = combineReducers({
   settingsState: settingsReducer,
   modeState: modeReducer,
   utilsState: utilsReducer,
   commonDataState: commonDataReducer
});

export default rootReducer;