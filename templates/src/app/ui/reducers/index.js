import { combineReducers } from 'redux';
import loadingReducer from './loading';
import snackbarReducer from './snackbar';

const uiReducer = combineReducers({
  loading: loadingReducer,
  snackbar: snackbarReducer,
});

export default uiReducer;
