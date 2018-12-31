import RequestResetComponent, { REQUEST_RESET_MUTATION } from '../components/RequestReset';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';

const mocks = [
	{
		request: {
			query: REQUEST_RESET_MUTATION,
			variables: { email: 'll61295@gmail.com' }
		},
		result: {
			data: {
				requestReset: { __typename: 'Message', message: 'success' }
			}
		}
	}
];

describe('<RequestReset/>', () => {
	it('renders and match snapshot', async () => {
		const wrapper = mount(
			<MockedProvider>
				<RequestResetComponent />
			</MockedProvider>
		);

		const form = wrapper.find('form[data-test="form"]');
		expect(toJSON(form)).toMatchSnapshot();
	});

	it('calls the mutation', async () => {
		const wrapper = mount(
			<MockedProvider mocks={mocks}>
				<RequestResetComponent />
			</MockedProvider>
		);

		wrapper.find('input').simulate('change', {
			target: { name: 'email', value: 'll61295@gmail.com' }
		});
		wrapper.find('form').simulate('submit');
		await wait();
		wrapper.update();
		expect(wrapper.find('p').text()).toContain('Success! Check your email for a reset link!');
	});
});
