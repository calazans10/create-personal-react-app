import {
  LOADING_SHOW,
  LOADING_HIDE,
  LOADING_REQUEST,
  MODAL_SHOW,
  MODAL_HIDE,
  SNACKBAR_SHOW,
  SNACKBAR_HIDE,
} from '../constants/actionTypes';

export const doShowLoading = () => ({
  type: LOADING_SHOW,
});

export const doHideLoading = () => ({
  type: LOADING_HIDE,
});

export const doRequestLoading = () => ({
  type: LOADING_REQUEST,
});

export const doShowModal = () => ({
  type: MODAL_SHOW,
});

export const doHideModal = () => ({
  type: MODAL_HIDE,
});

export const doShowSnackbar = (message, type) => ({
  type: SNACKBAR_SHOW,
  payload: {
    message,
    type,
  },
});

export const doHideSnackbar = () => ({
  type: SNACKBAR_HIDE,
});
