import {
  doShowLoading,
  doHideLoading,
  doRequestLoading,
  doShowSnackbar,
  doHideSnackbar,
} from './index';
import {
  LOADING_SHOW,
  LOADING_HIDE,
  LOADING_REQUEST,
  SNACKBAR_SHOW,
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
