import { takeEvery, all } from 'redux-saga/effects';
import { LOADING_REQUEST } from '../constants/actionTypes';
import { handleRequestLoading } from './ui';

function* rootSaga() {
  yield all([
    takeEvery(LOADING_REQUEST, handleRequestLoading)
  ]);
}

export default rootSaga;
