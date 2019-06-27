import reducer from './index';

describe('root reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      router: {
        action: 'POP',
        location: {
          hash: '',
          pathname: '/',
          search: '',
          state: undefined,
        },
      },
      ui: {
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
      },
      user: {
        users: [],
        selectedUser: {},
      },
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
});
