import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { doHideSnackbar } from '../../../actions';
import { isSnackbarVisible, getSnackbarType, getSnackbarMessage } from '../../../selectors';
import './index.scss';

export const Snackbar = ({ message, type, isVisible, onHideSnackbar }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [prevIsVisible, setPrevIsVisible] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onHideSnackbar();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible, onHideSnackbar]);

  const divClasses = classNames({
    snackbar: true,
    [`snackbar--${type}`]: !!type,
    'snackbar--hidden': isHidden,
    'snackbar--visible': isVisible,
  });

  if (isVisible !== prevIsVisible) {
    setPrevIsVisible(isVisible);
    setIsHidden(!isVisible);
  }

  return (
    <div className={divClasses}>
      <div className="snackbar__text">{message}</div>
      <button
        className="snackbar__close"
        type="button"
        aria-label="Close"
        onClick={onHideSnackbar}
      />
    </div>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onHideSnackbar: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: getSnackbarMessage(state),
  type: getSnackbarType(state),
  isVisible: isSnackbarVisible(state),
});

const mapDispatchToProps = {
  onHideSnackbar: doHideSnackbar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Snackbar);
