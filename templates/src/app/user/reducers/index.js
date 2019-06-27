import {
  GET_USERS_SUCCESS,
  USER_SELECT,
  USER_CLEAR,
  DELETE_USER_SUCCESS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  users: [],
  selectedUser: {},
};

const applySuccessGetUsers = (state, action) => {
  const { users } = action.payload;
  return { ...state, users };
};

const applySelectUser = (state, action) => {
  const { user } = action.payload;
  return { ...state, selectedUser: user };
};

const applyClearUser = state => {
  return { ...state, selectedUser: {} };
};

const applySuccessDeleteUser = (state, action) => {
  const { userId } = action.payload;
  const { users } = state;
  const filteredUsers = users.filter(user => user.id !== userId);

  return { ...state, users: filteredUsers };
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return applySuccessGetUsers(state, action);
    case USER_SELECT:
      return applySelectUser(state, action);
    case USER_CLEAR:
      return applyClearUser(state);
    case DELETE_USER_SUCCESS:
      return applySuccessDeleteUser(state, action);
    default:
      return state;
  }
};

export default userReducer;
