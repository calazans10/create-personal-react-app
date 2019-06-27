import reducer from './index';
import { doShowSnackbar, doHideSnackbar } from '../../actions';

describe('snackbar reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      message: '',
      type: '',
      isVisible: false,
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle SNACKBAR_SHOW', () => {
    const message = 'Não foi possível listar usuários!';
    const type = 'error';
    const action = doShowSnackbar(message, type);
    const expectedState = {
      message,
      type,
      isVisible: true,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SNACKBAR_HIDE', () => {
    const state = {
      message: 'Não foi possível listar usuários!',
      type: 'error',
      isVisible: true,
    };
    const action = doHideSnackbar();
    const expectedState = {
      message: '',
      type: '',
      isVisible: false,
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
