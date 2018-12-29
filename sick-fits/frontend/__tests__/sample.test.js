describe('sample test 101', () => {
	it('Works as expected', () => {
		const age = 100;
		expect(1).toEqual(1);
		expect(age).toEqual(100);
	});

	it('handles ranges fine', () => {
		const age = 100;
		expect(age).toBeGreaterThan(99);
	});

	it('makes a list of dog names', () => {
		const dogs = [ 'snickers', 'hugo' ];
		expect(dogs).toEqual(dogs);
		expect(dogs).toContain('snickers');
	});
});
