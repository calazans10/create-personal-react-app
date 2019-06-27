import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { initAnalytics } from './lib/analytics';

initAnalytics({ listen: () => {} });
Enzyme.configure({ adapter: new Adapter() });
