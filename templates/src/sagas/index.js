import { all } from 'redux-saga/effects';
import { sagas as uiSagas } from '../app/ui';
import { sagas as userSagas } from '../app/user';

const sagas = [uiSagas, userSagas].reduce((result, array) => result.concat(array), []);

export default function* rootSaga() {
  yield all(sagas);
}
