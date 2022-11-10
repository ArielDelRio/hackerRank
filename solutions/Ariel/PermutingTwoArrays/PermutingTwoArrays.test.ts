import twoArrays from './PermutingTwoArrays';

test('Permuting Two Arrays test', () => {
	expect(twoArrays(2, [2, 1, 3], [7, 8, 9])).toBe('YES');
	expect(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])).toBe('NO');
});
