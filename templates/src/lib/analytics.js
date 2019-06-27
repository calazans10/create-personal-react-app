import ReactGA from 'react-ga';

const initAnalytics = history => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE, {
    testMode: process.env.NODE_ENV === 'test',
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
  history.listen(location => {
    ReactGA.pageview(location.pathname + location.search);
  });
};

const createAnalyticsEvent = event => ReactGA.event(event);

export { initAnalytics, createAnalyticsEvent };
