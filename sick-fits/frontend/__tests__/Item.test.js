import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
	id: 'ABC123',
	title: 'A Cool Item',
	price: 5000,
	description: 'This is a cool item!',
	image: 'dog.jpg',
	largeImage: 'largedog.jpg'
};

describe('<Item/>', () => {
	it('renders and matches the snapshot', () => {
		const wrapper = shallow(<ItemComponent item={fakeItem} />);

		expect(toJSON(wrapper)).toMatchSnapshot();
	});
	// it('renders the pricetag and title', () => {
	// 	const wrapper = shallow(<ItemComponent item={fakeItem} />);
	// 	const PriceTag = wrapper.find('PriceTag');
	// 	expect(PriceTag.children().text()).toBe('$50');
	// 	expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
	// });

	// it('renders the image properly', () => {
	// 	const wrapper = shallow(<ItemComponent item={fakeItem} />);

	// 	const img = wrapper.find('img');
	// 	expect(img.props().src).toBe(fakeItem.image);
	// 	expect(img.props().alt).toBe(fakeItem.title);
	// });

	// it('renders the buttons properly', () => {
	// 	const wrapper = shallow(<ItemComponent item={fakeItem} />);

	// 	const buttonList = wrapper.find('.buttonList');
	// 	expect(buttonList.children()).toHaveLength(3);
	// 	expect(buttonList.find('Link').exists()).toBeTruthy();
	// 	expect(buttonList.find('AddToCart').exists()).toBeTruthy();
	// 	expect(buttonList.find('DeleteItem').exists()).toBeTruthy();
	// });
});
