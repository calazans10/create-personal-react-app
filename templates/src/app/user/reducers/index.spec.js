import reducer from './index';
import { doSuccessGetUsers } from '../actions';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      users: [],
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
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
