import { isLoadingVisible, isSnackbarVisible, getSnackbarMessage, getSnackbarType } from './index';

describe('ui selectors', () => {
  const state = {
    ui: {
      loading: {
        isVisible: true,
      },
      snackbar: {
        message: 'An error message',
        type: 'error',
        isVisible: true,
      },
    },
  };

  it('should create a selector that returns if a loading is visible', () => {
    expect(isLoadingVisible(state)).toEqual(true);
  });

  it('should create a selector that returns if a snackbar is visible', () => {
    expect(isSnackbarVisible(state)).toEqual(true);
  });

  it('should create a selector that returns the snackbar message', () => {
    expect(getSnackbarMessage(state)).toEqual('An error message');
  });

  it('should create a selector that returns the snackbar type', () => {
    expect(getSnackbarType(state)).toEqual('error');
  });
});
