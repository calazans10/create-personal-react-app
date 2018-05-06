import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doRequestLoading } from '../../../actions/ui';
import logo from '../../../images/logo.svg';
import './index.css';

class Home extends Component {
  componentDidMount() {
    this.props.onRequestLoading();
  }

  render() {
    return (
      <div className="home">
        <header className="home__header">
          <img src={logo} className="home__logo" alt="logo" />
          <h1 className="home__title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

Home.propTypes = {
  onRequestLoading: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRequestLoading: doRequestLoading,
};

export default connect(null, mapDispatchToProps)(Home);
