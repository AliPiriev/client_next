import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
   settingsState: settingsReducer,
});

export default rootReducer;