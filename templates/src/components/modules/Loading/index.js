import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoadingVisible } from '../../../selectors/ui';
import './index.css';

const Loading = ({ isVisible }) =>
  isVisible ? <div className="loading"><p>Loading...</p></div> : null;

Loading.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isVisible: isLoadingVisible(state),
});

export default connect(mapStateToProps)(Loading);
