/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from 'enzyme';
import App from './App';
import Layout from './components/layout/Layout';

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test('renders App without crashing', () => {
    const wrapper = setup();
    //console.log(wrapper.debug());
    expect(wrapper.exists()).toBe(true);
});

test('renders the Layout component', () => {
    const wrapper = setup();
    expect(wrapper.find(Layout).length).toBe(1);
});
