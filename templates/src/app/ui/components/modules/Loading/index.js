import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoadingVisible } from '../../../selectors';
import './index.scss';

export const Loading = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return <div className="loading" />;
};

Loading.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isVisible: isLoadingVisible(state),
});

export default connect(mapStateToProps)(Loading);
