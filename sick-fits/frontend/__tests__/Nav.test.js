import NavComponent from '../components/Nav';
import { CURRENT_USER_QUERY } from '../components/User';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser, fakeCartItem } from '../lib/testUtils';
import toJSON from 'enzyme-to-json';

const notSignedInMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: { data: { me: null } }
	}
];

const signedInMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: { data: { me: fakeUser() } }
	}
];

const signedInWithCartItemsMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: {
			data: {
				me: {
					...fakeUser(),
					cart: [ fakeCartItem(), fakeCartItem(), fakeCartItem() ]
				}
			}
		}
	}
];
describe('<Nav/>', () => {
	it('renders a minimal nav when signed out', async () => {
		const wrapper = mount(
			<MockedProvider mocks={notSignedInMocks}>
				<NavComponent />
			</MockedProvider>
		);
		await wait();
		wrapper.update();

		const nav = wrapper.find('ul[data-test="nav"]');
		expect(toJSON(nav)).toMatchSnapshot();
	});

	it('renders full nav when signed in', async () => {
		const wrapper = mount(
			<MockedProvider mocks={signedInMocks}>
				<NavComponent />
			</MockedProvider>
		);
		await wait();
		wrapper.update();

		const nav = wrapper.find('ul[data-test="nav"]');
		// expect(toJSON(nav)).toMatchSnapshot();
		expect(nav.children().length).toBe(6);
		expect(nav.text()).toContain('Sign Out');
	});

	it('renders the amount of items in the cart', async () => {
		const wrapper = mount(
			<MockedProvider mocks={signedInWithCartItemsMocks}>
				<NavComponent />
			</MockedProvider>
		);
		await wait();
		wrapper.update();

		const nav = wrapper.find('[data-test="nav"]');
		const count = nav.find('div.count');
		expect(toJSON(count)).toMatchSnapshot();
	});
});
