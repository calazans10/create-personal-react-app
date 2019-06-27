import ReactGA from 'react-ga';
import { initAnalytics, createAnalyticsEvent } from './analytics';

describe('analytics', () => {
  jest.mock('react-ga');

  describe('initAnalytics', () => {
    it('should initialize analytics', () => {
      ReactGA.initialize = jest.fn();
      const history = { listen: jest.fn() };
      initAnalytics(history);
      expect(ReactGA.initialize).toHaveBeenCalledTimes(1);
    });

    it('should dispatch an analytics event', () => {
      ReactGA.event = jest.fn();
      createAnalyticsEvent({ category: 'Login', action: 'Click login' });
      expect(ReactGA.event).toHaveBeenCalledTimes(1);
    });
  });
});
