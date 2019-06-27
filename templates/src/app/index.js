import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loading from './ui/components/modules/Loading';
import { initAnalytics } from '../lib/analytics';

const Home = lazy(() => import('./core/components/pages/Home'));
const NotFound = lazy(() => import('./core/components/pages/NotFound'));
const UserList = lazy(() => import('./user/components/pages/UserList'));

const App = ({ history }) => {
  useEffect(() => {
    if (process.env.REACT_APP_ENVIRONMENT === 'production') {
      initAnalytics(history);
    }
  }, [history]);

  return (
    <>
      <Loading />
      <Suspense fallback={null}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={props => <Home {...props} />} />
            <Route path="/users" exact component={props => <UserList {...props} />} />
            <Route component={props => <NotFound {...props} />} />
          </Switch>
        </ConnectedRouter>
      </Suspense>
    </>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
