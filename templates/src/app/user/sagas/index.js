import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { doSuccessGetUsers } from '../actions';
import { doShowLoading, doHideLoading, doShowSnackbar } from '../../ui/actions';
import { requestGetUsers } from '../api';
import { GET_USERS_REQUEST } from '../constants/actionTypes';

export function* handleRequestGetUsers() {
  try {
    yield put(doShowLoading());
    const response = yield call(requestGetUsers);
    yield delay(500);
    yield put(doSuccessGetUsers(response));
  } catch (error) {
    yield put(doShowSnackbar('Não foi possível listar usuários!', 'error'));
  } finally {
    yield put(doHideLoading());
  }
}

export default [takeLatest(GET_USERS_REQUEST, handleRequestGetUsers)];
