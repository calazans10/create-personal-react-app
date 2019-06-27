import reducer from './index';

describe('ui reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      loading: {
        isVisible: false,
      },
      modal: {
        isVisible: false,
      },
      snackbar: {
        isVisible: false,
        message: '',
        type: '',
      },
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
});
