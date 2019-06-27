import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../../../../core/components/modules/Button';
import { UserTable } from './index';

describe('UserTable', () => {
  describe('when there are users', () => {
    it('renders without crashing', () => {
      const props = {
        users: [
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
        ],
        onSelectUser: jest.fn(),
        onShowModal: jest.fn(),
      };
      const wrapper = shallow(<UserTable {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('when there are no users', () => {
    it('renders nothing', () => {
      const props = {
        users: [],
        onSelectUser: jest.fn(),
        onShowModal: jest.fn(),
      };
      const wrapper = shallow(<UserTable {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should handle the click event', () => {
      const props = {
        users: [
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
        ],
        onSelectUser: jest.fn(),
        onShowModal: jest.fn(),
      };

      const wrapper = shallow(<UserTable {...props} />);
      wrapper
        .find(Button)
        .at(0)
        .simulate('click');
      expect(props.onSelectUser).toHaveBeenCalledTimes(1);
      expect(props.onShowModal).toHaveBeenCalledTimes(1);
    });
  });
});
