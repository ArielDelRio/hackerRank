import birthday from './SubarrayDivision1';

test('SubarrayDivision1 tests', () => {
	expect(birthday([2, 2, 1, 3, 2], 4, 2)).toBe(2);
	expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
	expect(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)).toBe(3);
});
