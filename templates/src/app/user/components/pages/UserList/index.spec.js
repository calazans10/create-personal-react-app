import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { UserList } from './index';

describe('UserList', () => {
  it('renders without crashing', () => {
    const props = {
      onRequestGetUsers: jest.fn(),
    };
    const wrapper = shallow(<UserList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
