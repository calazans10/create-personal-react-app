import {
  doShowLoading,
  doHideLoading,
  doRequestLoading,
  doShowModal,
  doHideModal,
  doShowSnackbar,
  doHideSnackbar,
} from './index';
import {
  LOADING_SHOW,
  LOADING_HIDE,
  LOADING_REQUEST,
  MODAL_SHOW,
  SNACKBAR_SHOW,
  MODAL_HIDE,
  SNACKBAR_HIDE,
} from '../constants/actionTypes';

describe('ui actions', () => {
  it('should create doShowLoading action', () => {
    const expectedAction = {
      type: LOADING_SHOW,
    };
    expect(doShowLoading()).toEqual(expectedAction);
  });

  it('should create doHideLoading action', () => {
    const expectedAction = {
      type: LOADING_HIDE,
    };
    expect(doHideLoading()).toEqual(expectedAction);
  });

  it('should create doRequestLoading action', () => {
    const expectedAction = {
      type: LOADING_REQUEST,
    };
    expect(doRequestLoading()).toEqual(expectedAction);
  });

  it('should create doShowModal action', () => {
    const expectedAction = {
      type: MODAL_SHOW,
    };
    expect(doShowModal()).toEqual(expectedAction);
  });

  it('should create doHideModal action', () => {
    const expectedAction = {
      type: MODAL_HIDE,
    };
    expect(doHideModal()).toEqual(expectedAction);
  });

  it('should create doShowSnackbar action', () => {
    const message = 'Não foi possível listar usuários!';
    const type = 'error';
    const expectedAction = {
      type: SNACKBAR_SHOW,
      payload: {
        message,
        type,
      },
    };
    expect(doShowSnackbar(message, type)).toEqual(expectedAction);
  });

  it('should create doHideSnackbar action', () => {
    const expectedAction = {
      type: SNACKBAR_HIDE,
    };
    expect(doHideSnackbar()).toEqual(expectedAction);
  });
});
