import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { doShowLoading, doHideLoading } from '../actions/ui';

export function* handleRequestLoading() {
  yield put(doShowLoading());
  yield delay(1000);
  yield put(doHideLoading());
}
