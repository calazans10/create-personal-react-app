import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const Button = ({ type, children, onClick }) => {
  const btnClasses = classNames({
    button: true,
    [`button--${type}`]: true,
  });

  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'warning']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
