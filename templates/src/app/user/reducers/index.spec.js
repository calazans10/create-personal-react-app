import reducer from './index';
import { doSuccessGetUsers, doSelectUser, doClearUser, doSuccessDeleteUser } from '../actions';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      users: [],
      selectedUser: {},
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle GET_USERS_SUCCESS', () => {
    const users = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
    ];
    const action = doSuccessGetUsers(users);
    const expectedState = {
      users,
      selectedUser: {},
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle USER_SELECT', () => {
    const user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };
    const initialState = {
      users: [user],
      selectedUser: {},
    };
    const action = doSelectUser(user);
    const expectedState = {
      users: [user],
      selectedUser: user,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle USER_CLEAR', () => {
    const user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };
    const initialState = {
      users: [user],
      selectedUser: user,
    };
    const action = doClearUser();
    const expectedState = {
      users: [user],
      selectedUser: {},
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_USER_SUCCESS', () => {
    const user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };
    const initialState = {
      users: [user],
      selectedUser: user,
    };
    const action = doSuccessDeleteUser(user.id);
    const expectedState = {
      users: [],
      selectedUser: user,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
