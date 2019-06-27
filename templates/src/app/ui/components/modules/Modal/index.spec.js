import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Modal } from './index';

describe('Modal', () => {
  describe('when is visible', () => {
    it('renders without crashing', () => {
      const props = {
        children: <p>Test</p>,
        isVisible: true,
        onHideModal: jest.fn(),
      };
      const wrapper = shallow(<Modal {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
