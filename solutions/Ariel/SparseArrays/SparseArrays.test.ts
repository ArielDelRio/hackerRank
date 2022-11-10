import matchingStrings from './SparseArrays';

test('Sparse arrays test', () => {
	expect(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])).toStrictEqual([2, 1, 0]);

	expect(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh'])).toStrictEqual([1, 0, 1]);

	expect(
		matchingStrings(
			[
				'abcde',
				'sdaklfj',
				'asdjf',
				'na',
				'basdn',
				'sdaklfj',
				'asdjf',
				'na',
				'asdjf',
				'na',
				'basdn',
				'sdaklfj',
				'asdjf'
			],
			['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']
		)
	).toStrictEqual([1, 3, 4, 3, 2]);

	expect(matchingStrings(['a', 'b'], ['c', 'd'])).toStrictEqual([0, 0]);
});
