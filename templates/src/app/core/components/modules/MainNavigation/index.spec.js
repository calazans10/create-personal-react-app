import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainNavigation from './index';

describe('MainNavigation', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MainNavigation />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
