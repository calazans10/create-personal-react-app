import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../../../../core/components/modules/Button';
import { UserModal } from './index';

describe('UserModal', () => {
  const props = {
    user: {
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

    onClearUser: jest.fn(),
    onRequestDeleteUser: jest.fn(),
    onHideModal: jest.fn(),
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<UserModal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should handle the close modal event', () => {
    const wrapper = shallow(<UserModal {...props} />);
    wrapper
      .find(Button)
      .at(0)
      .simulate('click');
    expect(props.onClearUser).toHaveBeenCalledTimes(1);
    expect(props.onHideModal).toHaveBeenCalledTimes(1);
  });

  it('should handle the click delete user event', () => {
    const wrapper = shallow(<UserModal {...props} />);
    wrapper
      .find(Button)
      .at(1)
      .simulate('click');
    expect(props.onRequestDeleteUser).toHaveBeenCalledTimes(1);
  });
});
