import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import uiReducer from '../app/ui/reducers';
import userReducer from '../app/user/reducers';
import history from '../history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  ui: uiReducer,
  user: userReducer,
});

export default rootReducer;
