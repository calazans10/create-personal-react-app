import { LOADING_SHOW, LOADING_HIDE, LOADING_REQUEST } from '../constants/actionTypes';

export const doShowLoading = () => ({
  type: LOADING_SHOW,
});

export const doHideLoading = () => ({
  type: LOADING_HIDE,
});

export const doRequestLoading = () => ({
  type: LOADING_REQUEST,
});
