import { doRequestGetUsers, doSuccessGetUsers, doSelectUser, doClearSelectedUser } from './index';
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, USER_SELECT } from '../constants/actionTypes';

describe('user actions', () => {
  it('should create doRequestGetUsers action', () => {
    const expectedAction = {
      type: GET_USERS_REQUEST,
    };
    expect(doRequestGetUsers()).toEqual(expectedAction);
  });

  it('should create doSuccessGetUsers action', () => {
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
    const expectedAction = {
      type: GET_USERS_SUCCESS,
      payload: {
        users,
      },
    };
    expect(doSuccessGetUsers(users)).toEqual(expectedAction);
  });

  it('should create doSelectUser action', () => {
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
    const expectedAction = {
      type: USER_SELECT,
      payload: {
        user,
      },
    };
    expect(doSelectUser(user)).toEqual(expectedAction);
  });
});
