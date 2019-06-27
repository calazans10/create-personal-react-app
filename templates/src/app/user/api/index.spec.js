import sinon from 'sinon';
import {
  requestGetUsers,
  requestCreateUser,
  requestGetUser,
  requestUpdateUser,
  requestDeleteUser,
} from './index';
import AxiosFactory from '../../../lib/axios';

describe('user requests', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should call requestGetUsers', () => {
    const expectedData = [
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
    const mockedAxios = sandbox.mock().resolves({ data: expectedData });
    sandbox.stub(AxiosFactory, 'createInstance').returns({ get: mockedAxios });

    requestGetUsers().then(data => {
      expect(data).toEqual(expectedData);
      expect(mockedAxios.getCall(0).args[0]).toEqual('/users');
    });
  });

  it('should call requestCreateUser', () => {
    const payload = {
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
    const expectedData = {
      id: 1,
      ...payload,
    };
    const mockedAxios = sandbox.mock().resolves({ data: expectedData });
    sandbox.stub(AxiosFactory, 'createInstance').returns({ post: mockedAxios });

    requestCreateUser(payload).then(data => {
      expect(data).toEqual(expectedData);
      expect(mockedAxios.getCall(0).args[0]).toEqual('/users');
    });
  });

  it('should call requestGetUser', () => {
    const userId = 2;
    const expectedData = {
      userId: 1,
      id: 2,
      title: 'Title',
      body: 'Body',
    };
    const mockedAxios = sandbox.mock().resolves({ data: expectedData });
    sandbox.stub(AxiosFactory, 'createInstance').returns({ get: mockedAxios });

    requestGetUser(userId).then(data => {
      expect(data).toEqual(expectedData);
      expect(mockedAxios.getCall(0).args[0]).toEqual(`/users/${userId}`);
    });
  });

  it('should call requestUpdateUser', () => {
    const userId = 1;
    const payload = {
      name: 'Edited Name',
      username: 'Edited Username',
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
    const expectedData = {
      id: userId,
      ...payload,
    };
    const mockedAxios = sandbox.mock().resolves({ data: expectedData });
    sandbox.stub(AxiosFactory, 'createInstance').returns({ put: mockedAxios });

    requestUpdateUser(userId, payload).then(data => {
      expect(data).toEqual(expectedData);
      expect(mockedAxios.getCall(0).args[0]).toEqual(`/users/${userId}`);
    });
  });

  it('should call requestDeleteUser', () => {
    const userId = 1;
    const mockedAxios = sandbox.mock().resolves({ data: {} });
    sandbox.stub(AxiosFactory, 'createInstance').returns({ delete: mockedAxios });

    requestDeleteUser(userId).then(data => {
      expect(data).toEqual({});
      expect(mockedAxios.getCall(0).args[0]).toEqual(`/users/${userId}`);
    });
  });
});
