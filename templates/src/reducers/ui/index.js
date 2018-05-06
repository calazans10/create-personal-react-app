import { combineReducers } from 'redux';
import loadingReducer from './loading';

const uiReducer = combineReducers({
  loading: loadingReducer,
});

export default uiReducer;
