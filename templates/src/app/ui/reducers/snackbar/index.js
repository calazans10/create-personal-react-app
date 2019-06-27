import { SNACKBAR_SHOW, SNACKBAR_HIDE } from '../../constants/actionTypes';

const INITIAL_STATE = {
  message: '',
  type: '',
  isVisible: false,
};

const applyShowSnackbar = (state, action) => {
  const { message, type } = action.payload;
  return {
    ...state,
    message,
    type,
    isVisible: true,
  };
};

const applyHideSnackbar = () => INITIAL_STATE;

const snackbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SNACKBAR_SHOW:
      return applyShowSnackbar(state, action);
    case SNACKBAR_HIDE:
      return applyHideSnackbar();
    default:
      return state;
  }
};

export default snackbarReducer;
