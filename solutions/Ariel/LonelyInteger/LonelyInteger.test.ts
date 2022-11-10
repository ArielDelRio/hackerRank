import lonelyinteger from './LonelyInteger';

test('Lonely integer tests', () => {
	expect(lonelyinteger([1, 2, 3, 4, 3, 2, 1])).toBe(4);
	expect(lonelyinteger([1, 1, 2])).toBe(2);
	expect(lonelyinteger([0, 0, 1, 2, 1])).toBe(2);
	expect(lonelyinteger([4, 9, 95, 93, 57, 4, 57, 93, 9])).toBe(95);
});
