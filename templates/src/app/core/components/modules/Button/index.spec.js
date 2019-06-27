import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './index';

describe('Button', () => {
  it('renders without crashing', () => {
    const props = {
      type: 'default',
      children: 'Detalhes',
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Button {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
