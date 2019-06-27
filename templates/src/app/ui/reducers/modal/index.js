import { MODAL_SHOW, MODAL_HIDE } from '../../constants/actionTypes';

const INITIAL_STATE = {
  isVisible: false,
};

const applyShowModal = () => {
  return {
    isVisible: true,
  };
};

const applyHideModal = () => ({
  isVisible: false,
});

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return applyShowModal();
    case MODAL_HIDE:
      return applyHideModal();
    default:
      return state;
  }
};

export default modalReducer;
