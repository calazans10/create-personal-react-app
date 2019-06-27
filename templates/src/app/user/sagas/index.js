import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { doSuccessGetUsers, doSuccessDeleteUser, doClearUser } from '../actions';
import { doShowLoading, doHideLoading, doShowSnackbar, doHideModal } from '../../ui/actions';
import { requestGetUsers, requestDeleteUser } from '../api';
import { GET_USERS_REQUEST, DELETE_USERS_REQUEST } from '../constants/actionTypes';
import analyticsEvents from '../../../enum/analyticsEvents';
import { createAnalyticsEvent } from '../../../lib/analytics';

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

export function* handleRequestDeleteUser(action) {
  try {
    yield put(doShowLoading());
    yield put(doHideModal());
    yield call(createAnalyticsEvent, analyticsEvents.deleteUser);
    const { userId } = action.payload;
    yield call(requestDeleteUser, userId);
    yield put(doSuccessDeleteUser(userId));
    yield put(doClearUser());
    yield put(doShowSnackbar('Usuário removido com sucesso!', 'success'));
  } catch (error) {
    yield put(doShowSnackbar('Não foi possível remover o usuário selecionado!', 'error'));
  } finally {
    yield put(doHideLoading());
  }
}

export default [
  takeLatest(GET_USERS_REQUEST, handleRequestGetUsers),
  takeLatest(DELETE_USERS_REQUEST, handleRequestDeleteUser),
];
