import { combineReducers } from 'redux';
import loadingReducer from './loading';
import modalReducer from './modal';
import snackbarReducer from './snackbar';

const uiReducer = combineReducers({
  loading: loadingReducer,
  modal: modalReducer,
  snackbar: snackbarReducer,
});

export default uiReducer;
