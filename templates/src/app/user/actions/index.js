import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from '../constants/actionTypes';

export const doRequestGetUsers = () => ({
  type: GET_USERS_REQUEST,
});

export const doSuccessGetUsers = users => ({
  type: GET_USERS_SUCCESS,
  payload: { users },
});
