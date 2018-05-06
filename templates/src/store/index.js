import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import history from '../history';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const createAppMiddleware = (sagaMiddleware) => {
  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
    return composeWithDevTools(applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      logger,
    ));
  }

  return applyMiddleware(routerMiddleware(history), sagaMiddleware);
}

const sagaMiddleware = createSagaMiddleware();
const appMiddleware = createAppMiddleware(sagaMiddleware);

const store = createStore(rootReducer, appMiddleware);

sagaMiddleware.run(rootSaga);

export default store;
