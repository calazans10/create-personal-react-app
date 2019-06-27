import { GET_USERS_SUCCESS } from '../constants/actionTypes';

const INITIAL_STATE = {
  users: [],
};

const applySuccessGetUsers = (state, action) => {
  const { users } = action.payload;
  return { ...state, users };
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return applySuccessGetUsers(state, action);
    default:
      return state;
  }
};

export default userReducer;
