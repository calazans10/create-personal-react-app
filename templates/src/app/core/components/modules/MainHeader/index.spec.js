import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainHeader from './index';

describe('MainHeader', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MainHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
