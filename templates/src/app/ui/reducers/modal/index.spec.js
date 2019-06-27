import reducer from './index';
import { doShowModal, doHideModal } from '../../actions';

describe('modal reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      isVisible: false,
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle MODAL_SHOW', () => {
    const action = doShowModal();
    const expectedState = {
      isVisible: true,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MODAL_HIDE', () => {
    const action = doHideModal();
    const expectedState = {
      isVisible: false,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
