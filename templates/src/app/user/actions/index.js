import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  USER_SELECT,
  USER_CLEAR,
  DELETE_USERS_REQUEST,
  DELETE_USER_SUCCESS,
} from '../constants/actionTypes';

export const doRequestGetUsers = () => ({
  type: GET_USERS_REQUEST,
});

export const doSuccessGetUsers = users => ({
  type: GET_USERS_SUCCESS,
  payload: { users },
});

export const doSelectUser = user => ({
  type: USER_SELECT,
  payload: { user },
});

export const doClearUser = () => ({
  type: USER_CLEAR,
});

export const doRequestDeleteUser = userId => ({
  type: DELETE_USERS_REQUEST,
  payload: { userId },
});

export const doSuccessDeleteUser = userId => ({
  type: DELETE_USER_SUCCESS,
  payload: { userId },
});
