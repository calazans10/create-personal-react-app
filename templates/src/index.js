import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import history from './history';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
