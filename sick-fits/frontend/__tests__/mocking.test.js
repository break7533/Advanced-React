import { promises } from 'fs';
import { resolve } from 'path';

function Person(name, foods) {
	this.name = name;
	this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(this.foods), 2000);
	});
};

describe('mocking learning', () => {
	it('mocks a reg function', () => {
		const fetchDogs = jest.fn();
		fetchDogs('snickers');
		expect(fetchDogs).toHaveBeenCalled();
		expect(fetchDogs).toHaveBeenCalledWith('snickers');
		fetchDogs('hugo');
		expect(fetchDogs).toHaveBeenCalledTimes(2);
	});

	it('can create a person', () => {
		const me = new Person('Luis', [ 'burgers', 'pizza' ]);
		expect(me.name).toBe('Luis');
	});

	it('can fetch a food', async () => {
		const me = new Person('Luis', [ 'burgers', 'pizza' ]);
		me.fetchFavFoods = jest.fn().mockResolvedValue([ 'burgers', 'ramen' ]);
		const favFoods = await me.fetchFavFoods();
		expect(favFoods).toContain('burgers');
	});
});
