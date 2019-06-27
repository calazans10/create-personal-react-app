import { call, put, delay } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { handleRequestGetUsers } from './index';
import { doRequestGetUsers, doSuccessGetUsers } from '../actions';
import { doShowLoading, doHideLoading, doShowSnackbar } from '../../ui/actions';
import { requestGetUsers } from '../api';

describe('user sagas', () => {
  describe('handleRequestGetUsers', () => {
    const action = doRequestGetUsers();
    const generator = cloneableGenerator(handleRequestGetUsers)(action);

    expect(generator.next().value).toEqual(put(doShowLoading()));
    expect(generator.next().value).toEqual(call(requestGetUsers));

    describe('when is success', () => {
      const clone = generator.clone();
      const response = [
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

      it('should delay for for a half second', () => {
        expect(clone.next(response).value).toEqual(delay(500));
      });

      it('should dispatch doSuccessGetUsers', () => {
        expect(clone.next().value).toEqual(put(doSuccessGetUsers(response)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });

    describe('when is not success', () => {
      const clone = generator.clone();

      it('should display an error message', () => {
        expect(clone.throw(new Error('some error')).value).toEqual(
          put(doShowSnackbar('Não foi possível listar usuários!', 'error'))
        );
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });
  });
});
