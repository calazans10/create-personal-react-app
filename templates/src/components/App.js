import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import asyncComponent from './hoc/AsyncComponent';
import Loading from './modules/Loading';

const AsyncHome = asyncComponent(() => import('./pages/Home'));
const AsyncNotFound = asyncComponent(() => import('./pages/NotFound'));

const App = ({ history }) =>
  <Fragment>
    <Loading />
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route component={AsyncNotFound} />
      </Switch>
    </ConnectedRouter>
  </Fragment>

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
