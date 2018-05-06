import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import uiReducer from './ui';

const rootReducer = combineReducers({
  routerState: routerReducer,
  uiState: uiReducer,
});

export default rootReducer;
