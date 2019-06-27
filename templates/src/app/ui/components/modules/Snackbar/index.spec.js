import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Snackbar } from './index';

describe('Snackbar', () => {
  it('renders without crashing', () => {
    const props = {
      type: 'error',
      message: 'A message',
      isVisible: true,
      onHideSnackbar: jest.fn(),
    };
    const wrapper = shallow(<Snackbar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should handle the click event', () => {
    const props = {
      type: 'error',
      message: 'A message',
      isVisible: true,
      onHideSnackbar: jest.fn(),
    };

    const wrapper = shallow(<Snackbar {...props} />);
    wrapper.find('.snackbar__close').simulate('click');
    expect(props.onHideSnackbar).toHaveBeenCalledTimes(1);
  });
});
