import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';
import modeReducer from './modeReducer';
import commonDataReducer from './commonDataReducer';

const rootReducer = combineReducers({
   settingsState: settingsReducer,
   modeState: modeReducer,
   commonDataState: commonDataReducer
});

export default rootReducer;