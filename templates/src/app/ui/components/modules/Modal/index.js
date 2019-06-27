import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Portal from '../../../../core/components/modules/Portal';
import { isModalVisible } from '../../../selectors';
import './index.scss';

export const Modal = ({ children, isVisible, onHideModal }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [prevIsVisible, setPrevIsVisible] = useState(null);

  const divClass = classNames({
    modal: true,
    'modal--hidden': isHidden,
    'modal--visible': isVisible,
  });

  if (isVisible !== prevIsVisible) {
    setPrevIsVisible(isVisible);
    setIsHidden(!isVisible);
  }

  return (
    <Portal>
      <div className={divClass}>
        <div className="modal__dialog">
          <div className="modal__content">
            {children}
            <button
              className="modal__trigger"
              type="button"
              aria-label="Close modal"
              onClick={onHideModal}
            >
              <span className="visually-hidden">x</span>
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isVisible: isModalVisible(state),
});

export default connect(mapStateToProps)(Modal);
